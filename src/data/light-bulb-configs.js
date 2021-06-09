const lightBulbConfigs = [
    {
        letter: 'a',
        pathCoordinates: 'M42.058 8.634c-.112-1.055.364-1.257.992-1.323.628-.067 1.17.027 1.283 1.082.112 1.055-.25 2.673-.878 2.74-.628.066-1.285-1.443-1.397-2.499z',
        hexColor: '#ffd869'
    },
    {
        letter: 'b',
        pathCoordinates: 'M60.957 10.227c-.583-.887-.252-1.284.276-1.63.528-.348 1.054-.513 1.636.375.583.887 1.002 2.49.473 2.837-.528.347-1.803-.695-2.385-1.582z',
        hexColor: '#000897'
    },
    {
        letter: 'c',
        pathCoordinates: 'M75.585 11.267c.14-1.052.649-1.136 1.275-1.053.627.083 1.132.301.993 1.354-.14 1.052-.872 2.539-1.498 2.456-.626-.083-.91-1.705-.77-2.757z',
        hexColor: '#ab0165'
    },
    {
        letter: 'd',
        pathCoordinates: 'M99.493 14.274c.218-1.039.733-1.084 1.351-.954.618.13 1.106.386.888 1.424-.218 1.039-1.06 2.467-1.678 2.337-.618-.13-.78-1.768-.561-2.807z',
        hexColor: '#00ff6b'
    },
    {
        letter: 'e',
        pathCoordinates: 'M110.934 16.23c-.325-1.01.1-1.304.7-1.497.602-.194 1.153-.213 1.478.798.324 1.01.3 2.667-.3 2.86-.602.194-1.554-1.15-1.878-2.16z',
        hexColor: '#0060ff'
    },
    {
        letter: 'f',
        pathCoordinates: 'M135.64 20.964c-.324-1.01.1-1.305.702-1.498.601-.193 1.152-.212 1.477.798.324 1.01.3 2.668-.3 2.861-.602.193-1.554-1.15-1.878-2.16z',
        hexColor: '#ffb900'
    },
    {
        letter: 'g',
        pathCoordinates: 'M150.58 20.316c-.798-.7-.585-1.171-.168-1.646.417-.475.88-.774 1.677-.073.798.7 1.628 2.134 1.212 2.609-.417.474-1.923-.19-2.721-.89z',
        hexColor: '#ff0061'
    },
    {
        letter: 'h',
        pathCoordinates: 'M166.064 18.423c-.188-1.045.272-1.28.893-1.393.622-.112 1.17-.058 1.358.987.189 1.044-.054 2.684-.676 2.796-.622.112-1.387-1.346-1.575-2.39z',
        hexColor: '#00ecff'
    },
    {
        letter: 'i',
        pathCoordinates: 'M16.933 34.155c.14-1.053.65-1.137 1.276-1.054.626.082 1.132.301.993 1.353-.14 1.052-.87 2.54-1.497 2.457-.626-.083-.91-1.704-.771-2.756z',
        hexColor: '#11e6f7'
    },
    {
        letter: 'j',
        pathCoordinates: 'M44.98 42.203c-.16-1.05.306-1.272.93-1.367.625-.095 1.172-.026 1.331 1.023.16 1.05-.128 2.682-.753 2.777-.624.095-1.349-1.384-1.508-2.433z',
        hexColor: '#ff005c'
    },
    {
        letter: 'k',
        pathCoordinates: 'M62.266 46.341c-.318-1.012.108-1.304.711-1.493.603-.19 1.154-.205 1.471.808.318 1.013.283 2.67-.32 2.859-.602.19-1.544-1.161-1.862-2.174z',
        hexColor: '#1263e9'
    },
    {
        letter: 'l',
        pathCoordinates: 'M81.263 46.592c.39-.987.904-.946 1.492-.714.588.231 1.026.565.637 1.553-.39.987-1.458 2.254-2.046 2.022-.588-.231-.472-1.873-.083-2.86z',
        hexColor: '#6bbeff'
    },
    {
        letter: 'm',
        pathCoordinates: 'M100.639 48.63c.073-1.06.576-1.175 1.206-1.132.63.043 1.149.23 1.076 1.289-.073 1.058-.71 2.589-1.34 2.545-.63-.043-1.015-1.644-.942-2.703z',
        hexColor: '#f4b50f'
    },
    {
        letter: 'n',
        pathCoordinates: 'M114.99 44.05c-.226-1.036.225-1.289.842-1.423.617-.135 1.167-.1 1.393.936.226 1.037.044 2.684-.574 2.819-.617.135-1.435-1.294-1.661-2.331z',
        hexColor: '#f20a5e'
    },
    {
        letter: 'o',
        pathCoordinates: 'M132.42 40.448c-.096-1.057.383-1.252 1.012-1.31.629-.057 1.17.045 1.267 1.102.096 1.057-.289 2.669-.918 2.726-.63.058-1.264-1.461-1.36-2.518z',
        hexColor: '#ab0159'
    },
    {
        letter: 'p',
        pathCoordinates: 'M148.113 41.384c-.167-1.048.298-1.275.921-1.374.624-.1 1.171-.034 1.338 1.014.167 1.048-.109 2.682-.732 2.781-.624.1-1.36-1.373-1.527-2.421z',
        hexColor: '#86dcf8'
    },
    {
        letter: 'q',
        pathCoordinates: 'M182.418 44.066c.121-1.054.63-1.147 1.257-1.075.628.072 1.137.282 1.016 1.336s-.827 2.554-1.454 2.482c-.628-.072-.94-1.689-.819-2.743z',
        hexColor: '#f70f77'
    },
    {
        letter: 'r',
        pathCoordinates: 'M30.793 68.361c.332-1.007.849-.995 1.449-.797.6.197 1.056.506.723 1.514-.332 1.008-1.328 2.333-1.928 2.135-.6-.197-.577-1.844-.244-2.852z',
        hexColor: '#9ae1f9'
    },
    {
        letter: 's',
        pathCoordinates: 'M49.207 74.68c-.112-1.056.364-1.258.992-1.324.628-.067 1.17.027 1.283 1.082.112 1.055-.25 2.673-.878 2.74-.628.066-1.285-1.443-1.397-2.499z',
        hexColor: '#f4cd5c'
    },
    {
        letter: 't',
        pathCoordinates: 'M64.352 76.658c.072-1.06.576-1.175 1.206-1.132.63.043 1.149.23 1.076 1.289-.073 1.058-.71 2.589-1.34 2.545-.63-.043-1.015-1.644-.942-2.702z',
        hexColor: '#f3b91e'
    },
    {
        letter: 'u',
        pathCoordinates: 'M86.552 78.101c-.57-.895-.234-1.287.299-1.627.533-.34 1.06-.497 1.63.398.57.895.967 2.505.434 2.844-.532.34-1.793-.72-2.363-1.615z',
        hexColor: '#236fee'
    },
    {
        letter: 'v',
        pathCoordinates: 'M104.402 77.737c-.031-1.06.459-1.225 1.09-1.243.632-.019 1.166.117 1.196 1.177.031 1.061-.453 2.646-1.085 2.664-.631.019-1.17-1.537-1.201-2.598z',
        hexColor: '#f13478'
    },
    {
        letter: 'w',
        pathCoordinates: 'M120.964 75.371c-.03-1.06.46-1.225 1.092-1.243.631-.018 1.165.117 1.195 1.178.03 1.061-.455 2.646-1.086 2.664-.632.018-1.17-1.538-1.2-2.599z',
        hexColor: '#4683ea'
    },
    {
        letter: 'x',
        pathCoordinates: 'M135.135 73.832c-.343-1.005.076-1.307.674-1.512.598-.204 1.148-.233 1.491.771.344 1.004.35 2.662-.247 2.866-.598.205-1.574-1.121-1.918-2.125z',
        hexColor: '#e5aa0e'
    },
    {
        letter: 'y',
        pathCoordinates: 'M153.964 74.08c.042-1.06.542-1.191 1.173-1.166.631.024 1.155.196 1.113 1.256-.041 1.06-.632 2.609-1.264 2.584-.63-.025-1.063-1.613-1.022-2.674z',
        hexColor: '#ee588e'
    },
    {
        letter: 'z',
        pathCoordinates: 'M178.152 73.624c-.048-1.06.44-1.233 1.07-1.262.631-.028 1.168.098 1.216 1.158.048 1.06-.41 2.653-1.04 2.682-.632.029-1.197-1.518-1.246-2.578z',
        hexColor: '#e24880'
    }
];

export default lightBulbConfigs;
