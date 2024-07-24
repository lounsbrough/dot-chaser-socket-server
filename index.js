const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');

const port = 7242;

const corsConfig = { origin: ['https://codenough.com'] };

if (process.env.LOCAL_RUN) {
    console.log('Local run, allowing all CORS origins');
    corsConfig.origin = '*';
}

const io = new Server(server, {
    cors: corsConfig
});

const roomGameStates = {};

const getInitialGameState = () => ({
    currentPositions: {
        chaser: [1, 1],
        chasee: [3, 3]
    },
    playerIds: {},
    playerNames: {},
    pendingPositions: {}
});

const getPublicGameState = (gameState) => ({
    currentPositions: gameState.currentPositions,
    playerNames: gameState.playerNames
});

const geolocationLobbyRoomId = 'geoLocationLobby';
const geolocationFoundMessageId = 'geolocation-found';
const geolocationJoinMessageId = 'geolocation-join';
const joinRoomMessageId = 'join-room';
const nextMoveMessageId = 'next-move';
const gameStateChangeMessageId = 'game-state-change';

const setupJoinRoomMessageHandler = (socket) => {
    socket.on(joinRoomMessageId, ({ roomId, playerId, playerName }, callback) => {
        if (!roomId || !playerId || !playerName || !callback) {
            return;
        }

        const uppercaseRoomId = roomId.toUpperCase();
        if (!roomGameStates[uppercaseRoomId]) {
            roomGameStates[uppercaseRoomId] = getInitialGameState();
        }

        if (!roomGameStates[uppercaseRoomId].playerIds.chaser && roomGameStates[uppercaseRoomId].playerIds.chasee !== playerId) {
            roomGameStates[uppercaseRoomId].playerNames.chaser = playerName;
            roomGameStates[uppercaseRoomId].playerIds.chaser = playerId;
        } else if (!roomGameStates[uppercaseRoomId].playerIds.chasee && roomGameStates[uppercaseRoomId].playerIds.chaser !== playerId) {
            roomGameStates[uppercaseRoomId].playerNames.chasee = playerName;
            roomGameStates[uppercaseRoomId].playerIds.chasee = playerId;
        } else if (roomGameStates[uppercaseRoomId].playerIds.chaser !== playerId
            && roomGameStates[uppercaseRoomId].playerIds.chasee !== playerId) {
            return;
        }

        socket.join(uppercaseRoomId);
        socket.to(uppercaseRoomId).emit(gameStateChangeMessageId, getPublicGameState(roomGameStates[uppercaseRoomId]));
        callback(getPublicGameState(roomGameStates[uppercaseRoomId]))
    });
};

const setupNextMoveMessageHandler = (socket) => {
    socket.on(nextMoveMessageId, ({ roomId, playerId, nextMove }) => {
        if (!roomId || !playerId || !nextMove) {
            return;
        }

        const uppercaseRoomId = roomId.toUpperCase();

        const role = Object.entries(roomGameStates[uppercaseRoomId].playerIds).find(([_, id]) => id === playerId)?.[0];
        if (role && nextMove?.[0] && nextMove?.[1]) {
            roomGameStates[uppercaseRoomId].pendingPositions[role] = [nextMove[0], nextMove[1]];
        }

        if (roomGameStates[uppercaseRoomId].pendingPositions.chaser && roomGameStates[uppercaseRoomId].pendingPositions.chasee) {
            roomGameStates[uppercaseRoomId].currentPositions = roomGameStates[uppercaseRoomId].pendingPositions;
            io.sockets.in(uppercaseRoomId).emit(gameStateChangeMessageId, getPublicGameState(roomGameStates[uppercaseRoomId]));
            roomGameStates[uppercaseRoomId].pendingPositions = {};

            if (JSON.stringify(roomGameStates[uppercaseRoomId].currentPositions.chaser) === JSON.stringify(roomGameStates[uppercaseRoomId].currentPositions.chasee)) {
                setTimeout(() => {
                    io.sockets.in(uppercaseRoomId).emit(gameStateChangeMessageId, getInitialGameState());
                }, 3000);
            }
        }
    });
};

const setupGeolocationFoundMessageHandler = (socket) => {
    socket.on(geolocationFoundMessageId, (geolocation) => {
        socket.join(geolocationLobbyRoomId);
        socket.to(geolocationLobbyRoomId).emit(geolocationFoundMessageId, geolocation);
    });
};

const setupGeolocationJoinMessageHandler = (socket) => {
    socket.on(geolocationJoinMessageId, (geolocation, roomId) => {
        socket.leave(geolocationLobbyRoomId);
        roomGameStates[roomId] = getInitialGameState();
        socket.join(roomId);
        socket.to(geolocationLobbyRoomId).emit(geolocationJoinMessageId, geolocation, roomId);
    });
};

io.on('connection', (socket) => {
    setupJoinRoomMessageHandler(socket);
    setupNextMoveMessageHandler(socket);
    setupGeolocationFoundMessageHandler(socket);
    setupGeolocationJoinMessageHandler(socket);
});

server.listen(port, () => {
    console.log(`listening on *:${port}`);
});
