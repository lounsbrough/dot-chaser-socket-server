import * as React from 'react';
import LightBulbSvgPath from './LightBulbSvgPath';

import lightBulbConfigs from '../../data/light-bulb-configs';

const LightsWallSvg = (props) =>
    <svg
        viewBox="0 0 210 297"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <defs>
            <filter
                id="blurred_border"
                x={-0.36}
                y={-0.217}
                width={1.72}
                height={1.434}
                colorInterpolationFilters="sRGB"
            >
                <feGaussianBlur stdDeviation={0.138} />
            </filter>
        </defs>
        <path d="M10.557 0c-1.493.045-1.132.271 3.257 2.036 2.76 1.086 6.245 2.353 7.783 2.76 2.715.724 2.85.724 4.163-.135 1.312-.815 1.72-.815 7.15-.272 8.189.77 8.415.815 9.094 2.398.042.087.07.13.109.206.283-.004.566-.006.849-.006.344 0 .689.002 1.033.005a.435.435 0 00-.091-.43c-.543-.634 10.407-.815 12.805-.182.955.249 2.341 1.03 3.232 1.786.161-.002.323-.003.485-.003.294 0 .588.003.881.005H62.591c-.129-.102-.219-.188-.362-.295-.86-.633-.86-.679.453-.452.769.136 2.896.362 4.75.497 5.25.453 8.1 1.04 8.96 1.9.084.08.131.117.198.178h.662c.015-.06.03-.099.045-.177.18-.905.678-.95 1.945-.272.543.272 2.49.543 4.39.679 5.339.271 8.642.679 8.958 1.131.136.226 1.63.407 3.349.407 3.586 0 4.433.178 4.182 1.21.133.01.265.021.397.034.47.045.798.078 1.258.162.214-.85.525-.953 1.538-.953.77 0 2.67.226 4.208.498 2.172.362 2.94.724 3.122 1.357.062.155.143.28.22.41a.911.911 0 01.141-.01h1.517c-.01-.11.015-.236.113-.4.317-.498 1.177-.453 5.068.407 2.579.543 6.832 1.674 9.411 2.534 2.58.86 5.475 1.538 6.47 1.538 1.117 0 1.586.118 1.909.604.077-.01.158-.015.244-.015h1.519l-.459-.95 4.57-.226c5.427-.322 6.424-.229 8.031.798a.719.719 0 01.144-.077c.56-.225 1.104-.49 1.66-.724-.316-.17-.608-.363-.785-.54-.407-.408-.227-.543.814-.543.724 0 1.493-.182 1.629-.408.181-.226 1.04-.452 1.9-.498.86 0 3.032-.407 4.797-.86 4.235-1.058 5.246-.762 6.551 2.062.167-.1.334-.207.513-.283a3.004 3.004 0 01.787-.218 5.39 5.39 0 01.153-.023c-.27-.398.018-.813.728-.813 1.132 0 7.783 2.579 13.348 5.158 3.756 1.765 4.842 2.081 7.014 2.036l2.534-.09-2.715-.317c-1.855-.226-3.937-.95-6.561-2.263-2.127-1.085-5.384-2.488-7.24-3.212l-3.393-1.222 1.674-.317c2.081-.407 2.67-.271 10.452 2.534 5.882 2.082 6.425 2.217 10.18 2.127 3.53-.136 4.163 0 6.29 1.086 2.353 1.267 3.756 1.583 3.756.905 0-.181-1.539-.995-3.394-1.81-3.167-1.403-3.665-1.493-6.516-1.176-3.438.316-4.66.045-12.488-3.123-4.434-1.764-4.615-1.81-9.683-1.72l-5.158.091-2.398-1.629-2.398-1.673-2.353.769c-1.267.452-4.027 1.583-6.109 2.533-4.57 2.127-6.651 2.49-8.687 1.63-1.177-.498-3.213-.589-9.276-.408-7.375.181-7.963.136-11.855-.995-5.61-1.629-20.768-4.073-31.673-5.023-1.72-.18-4.072-.588-5.203-.905-2.941-.86-5.25-1.221-4.751-.723.271.226.86.542 1.357.678.498.136-.271.181-1.674.045-1.403-.09-2.941-.362-3.394-.633-.633-.362-.407-.407.996-.272l1.81.226-2.036-.587c-1.448-.453-2.127-.453-2.353-.091-.317.543-10.995-.272-15.973-1.222-2.262-.452-2.534-.588-1.583-.86 2.443-.678 10.27-.09 15.61 1.222 2.308.543.905-.271-1.629-.995-3.213-.905-18.325-1.448-23.935-.905-2.987.271-5.068.226-6.833-.136-1.357-.272-3.077-.498-3.846-.498l-1.312-.045 1.267-.678c1.13-.589 1.946-.634 6.063-.182 2.624.272 4.841.407 4.932.317.09-.09-1.991-.543-4.706-.95-4.66-.77-4.977-.77-6.56 0-1.675.814-1.675.815-5.204-.679-1.9-.814-3.892-1.583-4.39-1.72-1.493-.361 2.58 1.946 4.435 2.58 2.67.86 1.674 1.04-2.353.452-3.213-.497-3.8-.452-4.796.182-1.629 1.085-2.489.95-8.19-1.313C14.403.86 11.552 0 10.557 0zm149.86 13.122c.27 0 .95.135 1.583.316.905.227.453.453-2.262 1.041a358.67 358.67 0 00-4.751 1.086c-1.177.272-1.222.227-.498-.226.95-.588 5.248-2.172 5.927-2.217zm-24.468 3.727c.95-.006 1.798.096 2.975.3 1.538.317.678.362-3.394.362-3.891 0-4.796-.09-3.167-.317 1.583-.226 2.636-.34 3.586-.345zM59.288 12.986c-.86.317-3.167 2.76-3.167 3.348 0 .227.271.408.588.408 1.04 0 2.534 10.18 1.584 10.497-.362.136-.272.543.317 1.312.769.95 1.13 1.086 2.488.815.86-.181 2.036-.227 2.534-.136 1.448.362 4.434-.588 5.565-1.765 1.358-1.493 1.675-3.891.77-5.7-.679-1.313-1.991-2.127-4.57-2.987-.86-.272-.815-.317.271-.905.679-.362 1.312-.95 1.493-1.358.362-.995-.452-2.805-1.493-3.348-.905-.498-5.158-.633-6.38-.18zm6.335 2.805c0 1.086-.905 1.448-4.163 1.81-2.488.272-2.624.227-2.624-.678 0-1.132 1.855-1.855 4.887-1.946 1.583-.045 1.9.09 1.9.814zm.136 5.883c1.674.633 2.579 1.764 2.579 3.212 0 1.855-1.674 2.941-4.073 2.534-1.13-.18-1.81-.09-1.81.181 0 .226-.361.453-.814.453-1.267 0-3.031-5.52-2.036-6.47.452-.453 4.887-.363 6.154.09zM38.022 19.23c-2.353 5.928-2.398 6.109-1.629 7.24.95 1.448 1.131 1.312 2.081-1.493.724-2.036.815-2.127 2.76-2.398 1.086-.136 2.263-.362 2.58-.453.407-.136 1.13 1.086 2.081 3.439 1.131 2.805 1.674 3.665 2.443 3.755.543.091.996.046.996-.045 0-.498-6.018-15.067-6.425-15.61-.272-.272-.905-.543-1.493-.543-.86 0-1.313.814-3.394 6.108zm5.158-.407c.407.905.724 1.72.634 1.765-.362.362-3.53 1.04-3.53.769 0-.588 1.584-4.163 1.856-4.163.135 0 .588.724 1.04 1.629zM80.278 13.73c-.49.009-.945.06-1.307.16-3.62.996-5.837 5.476-4.75 9.458 1.402 4.932 8.641 9.547 10.677 6.742.815-1.132.362-1.63-1.357-1.493-1.9.135-5.475-1.946-6.651-3.847-2.172-3.62.361-8.913 4.253-8.913 1.176 0 2.353.814 2.67 1.81.135.407.361.045.588-.86.226-1.086.135-1.674-.362-2.172-.51-.543-2.291-.908-3.761-.884z" />
        <path d="M.088 16.886c-.071.028-.074.127-.074.263 0 .271 1.358 1.493 3.077 2.715 2.081 1.583 5.204 3.122 10.045 5.067 3.846 1.539 7.918 3.304 9.05 3.892 3.167 1.674 5.972 3.393 5.791 3.53-.09.09-2.036-.092-4.299-.363-2.986-.317-4.208-.633-4.208-1.086 0-.86-1.357-1.312-1.81-.588-.316.498-.633.498-1.9 0-2.262-.905-11.674-6.29-13.62-7.828-.95-.724-1.854-1.221-1.99-1.04-.181.135-.181.316-.09.407.09.09.95.678 1.9 1.402 2.986 2.172 12.67 7.511 14.253 7.783 1.357.271 1.493.407 1.221 1.403-.027.122.022.218.005.34.085-.004.115-.003.294.004l.24.047h.16c.144.003.283.006.426-.01.11.012.22.015.328.036a.795.795 0 01.109.031l.112.021.055.002h.035c-.025-.13.058-.33.001-.426-.18-.317.407-.362 1.9-.181 1.222.18 3.846.498 5.837.679 2.806.271 4.344.724 6.969 2.036 4.253 2.172 11.22 5.248 12.171 5.384.452.045.996.271 1.267.407.226.181 3.53.77 7.285 1.313l6.787 1.04.722 1.353H64.017c-.028-.041-.04-.091-.068-.131-.724-1.041-.724-1.086.362-.815 1.493.362 9.411 1.63 13.484 2.127 2.94.407 3.393.362 3.936-.362.588-.724.679-.724 1.312.09.589.77.996.815 4.39.499 4.117-.408 8.551-.498 11.583-.227 1.81.136 1.9.226 1.9 1.539v.001c.042 0 .084 0 .126-.003.22-.013.438-.04.656-.067.374-.046.691-.1 1.053-.177.051-1.062.358-1.203 2.373-1.745 1.267-.317 3.846-1.267 5.701-2.082 3.863-1.797 4.111-1.803 4.115-.652.428-.103.855-.216 1.273-.352.083-.027.166-.057.247-.087-.476-1.306-.377-1.45.745-2.03.724-.363 2.76-.86 4.525-1.132 1.764-.271 4.796-.77 6.651-1.177 3.407-.697 4.09-.596 4.189 1.082h.398c.449-.002.897 0 1.346.008-.197-.56-.31-1.058-.232-1.135.181-.18 8.416.498 12.443 1.04 1.222.137 1.9.454 1.9.906 0 .053.02.098.033.146h1.171c.013 0 .034-.008.049-.01.008 0 .015.002.015.01h.05c.02-.062.04-.124.04-.191 0-.543.86-.68 4.887-.724 2.67-.046 6.063-.226 7.556-.407 2.444-.272 2.534-.317.905-.453l-1.81-.136 2.263-.316c1.266-.226 3.484-.363 4.977-.317l2.715.045-3.168.272-3.167.271 3.891.09c2.76.091 4.39.317 5.702.996.995.452 3.303 1.267 5.112 1.765 1.81.498 3.394.995 3.484 1.086.047.07.016.373-.058.796.242.042.483.093.721.152.16.039.315.09.472.135.335.096.247.069.42.122.054-.494.145-.889.3-.889.182 0 2.263.317 4.707.725 3.846.678 4.931.723 9.14.18 4.253-.543 4.796-.678 4.796-1.493 0-.679-.227-.814-.996-.588-.588.136-3.122.588-5.7.995-4.526.679-4.661.68-6.154-.226-.86-.543-1.856-.814-2.263-.679-1.267.498-11.086-1.99-17.104-4.344-2.307-.905-2.624-.904-12.261.68-5.43.859-9.005.859-17.511-.182-3.846-.452-9.321-.86-12.127-.905-4.886-.045-5.293 0-9.185 1.539-3.62 1.448-6.335 2.081-16.877 3.891-1.448.226-3.032.634-3.484.86-.453.271-2.443.452-4.389.452-3.167 0-8.19.724-11.176 1.584-.724.226-1.041-.045-1.448-1.131-.588-1.63-1.493-1.448-1.493.271 0 1.222.723 1.222-7.014.136-5.158-.679-13.8-3.212-21.764-6.29-3.756-1.492-7.828-2.895-9.05-3.167-1.22-.316-3.121-.814-4.253-1.176-1.13-.362-3.53-.634-5.384-.634-3.575 0-5.566-.723-10.317-3.89-1.267-.865-4.75-2.444-7.692-3.575-7.284-2.806-7.963-3.122-11.628-5.611-3.224-2.138-4.055-2.698-4.27-2.616zm32.964 16.266c.465-.028 1.186-.008 1.995.048 1.618.114 3.586.374 4.559.69 13.076 4.163 22.623 7.692 21.854 7.964-.588.226-6.515-.633-12.624-1.855-.769-.136-1.312-.634-1.493-1.222-.271-.95-.317-.95-.905-.18-.634.814-.95.723-6.923-1.947-3.439-1.538-6.56-2.986-6.923-3.257-.215-.136-.005-.212.46-.24zm93.367 3.578c.492-.034.74.08 1.103.328.407.226-.046.452-1.358.633-1.086.136-2.67.407-3.53.588-2.262.453-1.312-.316 1.222-.995 1.335-.34 2.07-.52 2.563-.554zm-12.608 3.585c.498 0-.362.544-1.9 1.268-1.538.769-4.253 1.855-6.063 2.533-3.167 1.132-3.213 1.132-3.44.227-.316-1.177-1.492-1.177-1.492 0 0 .86-.181.904-2.58.588-2.986-.408-4.705-.408-10.09.045-2.397.18-3.484.136-2.94-.135 1.538-.68 9.14-1.54 10.95-1.222 1.04.135 2.533 0 3.755-.407 2.081-.634 12.217-2.76 13.8-2.897zm-51.23 1.359c.287-.083 1.153.146 3.494.859l2.942.86-2.263-.272c-2.353-.272-4.299-.86-4.299-1.267 0-.09.031-.153.127-.18zm122.74 1.456a.506.506 0 01.048.013c.014.005-.02-.006-.048-.013z" />
        <path d="M94.672 18.642c-.317.317-.543.815-.543 1.086 0 .317-.453.633-.996.724-.588.09-1.086.498-1.176.95-.136.724.09.815 1.538.679 1.72-.136 1.765-.09 2.082 1.674.18.995.226 3.575.09 5.746-.226 3.258-.136 4.073.453 4.66.543.544.724.59.724.137 0-.77 2.76-2.941 4.208-3.303.588-.181 1.764-.996 2.579-1.81 1.221-1.267 1.538-1.991 1.72-3.937.135-1.99 0-2.624-.86-3.71-1.267-1.629-3.44-2.534-6.018-2.534-1.132 0-2.172-.226-2.308-.452-.362-.589-.815-.589-1.493.09zm8.416 3.8c1.855 1.313.814 5.25-1.855 6.878-2.398 1.539-3.032 1.313-3.077-.95 0-1.04-.181-2.85-.362-4.027-.181-1.221-.272-2.262-.136-2.398.543-.543 4.48-.18 5.43.498zM172.057 18.982c-.286.008-.611.203-.962.61-.317.407-.362 1.674-.181 3.62l.271 3.032h-2.217c-3.936 0-4.208-.227-4.117-2.896.09-2.172.045-2.308-1.041-2.308-.77 0-1.131.226-1.086.77 0 .452.045 2.578.09 4.705.046 2.443.272 3.756.544 3.575.271-.136.452.135.452.633 0 .543.226.95.452.95.272 0 .453-.905.453-2.036v-2.036l3.167.09 3.168.136v3.077c0 2.76.09 3.077 1.04 3.439.996.362.995.317 1.222-3.756.135-2.262.09-4.163-.046-4.253-.18-.09-.18-1.448-.044-3.032.203-2.68-.306-4.343-1.165-4.32zM117.115 19.773c-1.946.226-2.353.77-2.806 3.846-.226 1.448-.543 2.172-.995 2.172-.86 0-.815 1.312.09 1.674.634.227.724.77.453 3.394-.272 3.212-.09 3.53 1.493 2.534.633-.408 1.72-.362 4.615.045 5.566.86 5.61.86 5.747-.317.09-.543.045-.995-.136-.995-.136 0-1.9-.407-3.891-.95-3.349-.86-3.71-.86-4.706-.227-1.539.996-1.584.95-1.584-1.04v-1.765l2.76-.498c1.539-.271 2.896-.588 2.987-.678.588-.543-.589-1.177-2.625-1.448-2.172-.272-2.262-.362-1.99-1.493.407-1.675 1.447-2.308 3.936-2.308 1.176 0 2.172-.181 2.172-.362 0-.498-2.489-1.9-3.258-1.81-.317.045-1.358.136-2.262.226zM133.426 21.29c-.226 0-.384.112-.384.338 0 .181-.453.543-.996.77-1.403.633-1.493 1.493-.181 1.855 1.086.271 1.131.362 1.131 4.027-.045 4.163.136 4.75 1.403 4.75.724 0 .814-.316.77-1.945-.091-1.72 0-1.9 1.04-2.036.633-.09 1.403-.226 1.765-.362 1.04-.362-.362-1.538-1.81-1.538-1.132 0-1.312-.182-1.312-1.358v-1.312l2.94.09c1.675.046 2.942-.09 2.942-.362 0-.271-.453-.497-.996-.588-1.312-.18-4.977-1.493-5.52-1.99-.271-.227-.566-.34-.792-.34zM149.104 21.99c-2.76 1.403-4.298 3.575-4.298 5.973 0 1.81 1.72 4.208 3.755 5.203 1.403.724 1.9.77 3.258.317 2.036-.678 2.58-1.72 2.353-4.389l-.18-2.172-1.946-.135c-2.308-.181-2.987.316-2.308 1.674.362.633.95.95 1.855.95 1.674 0 1.765.77.226 1.176a3.685 3.685 0 01-4.524-4.389c.543-2.398 4.705-4.841 4.796-2.805 0 .588.136.543.452-.226.226-.588.317-1.267.136-1.493-.362-.634-2.081-.498-3.575.316zM192.542 23.031c.77.181 2.308.905 3.439 1.538 1.629.95 2.67 1.222 4.841 1.222 1.539 0 2.806-.18 2.806-.407 0-.226-1.267-.362-2.806-.362-2.398.09-3.167-.09-4.75-1.176-1.177-.724-2.49-1.222-3.394-1.177l-1.493.045zM10.277 39.216c-1.145-.004-1.994.013-2.254.059-.679.135-1.312 1.629-.86 2.081.136.136 1.765.272 3.575.272h3.348l-.317 7.104c-.18 3.936-.362 7.194-.407 7.24-.045.09-1.267-.091-2.67-.408-2.172-.407-2.67-.407-3.031.136-.453.77-.136 1.086 1.99 1.764l1.72.543-.316 2.082c-.181 1.176-.362 2.217-.453 2.307-.09.091-2.262-.678-4.796-1.764-6.109-2.489-6.108-2.534-5.52-1.855.271.271 2.714 1.448 5.43 2.533 3.845 1.584 4.977 2.263 5.248 3.032.136.588.271.724.317.317.045-.498.588-.679 2.443-.724 3.032-.045 4.48.724 5.52 2.986.724 1.674.996 1.855 2.444 1.855 1.447 0 6.515-1.176 8.823-2.081.547-.226.707-.123.664.58.208-.063.416-.124.625-.183.342-.096.666-.189 1.003-.26l.016-.77h1.719c3.167 0 15.474 5.067 15.067 6.198-.136.272.181.588.68.724.452.136.859.09.859-.09 0-.498 8.551-.227 11.447.362 2.444.543 2.625.679 2.399 1.629-.024.094-.027.169-.04.253.338.06.674.135 1.006.22.106.028.21.059.314.092.285.092.125.063.24.082l.01.003c.001-.089.008-.138.008-.243 0-.995.181-1.131.95-.95.498.136 2.127.045 3.575-.227 2.443-.452 2.715-.452 4.117.589 1.358.95 2.036 1.086 5.701 1.086h4.163l.935 1.017.017-.03c.043-.04.083-.084.13-.12.07-.055.146-.1.218-.15.106-.074.208-.157.32-.222.055-.033.112-.061.169-.091.036-.022.072-.044.11-.064.074-.04.204-.103.285-.15l.22-.13c-.91-1.045-.833-1.145.04-1.373.633-.135 1.764.09 2.805.634 2.217 1.131 2.805 1.131 4.751-.045 1.493-.905 1.72-.95 5.52-.408l3.982.589v.945h1.559c.12.006.24.023.36.04.09-.706.244-1.121.57-1.121.361 0 1.854-.407 3.257-.86 1.448-.497 4.525-.995 6.833-1.131l4.162-.317v1.036h1.602c-.022-.09-.036-.163-.063-.267-.226-.95-.136-1.176.588-1.176.498 0 2.081-.407 3.53-.905 1.492-.498 3.8-.905 5.384-.905h2.76v1.398h1.83c-.027-.053-.036-.075-.066-.131-.633-1.177-.633-1.357-.045-1.13.362.135 4.434.406 9.095.587 7.782.272 8.416.362 8.416 1.131 0 .073.02.126.03.19h1.674c-.01-.064-.009-.115-.03-.19-.18-.724.226-.905 3.484-1.357 6.968-.95 10.543-1.086 14.886-.498l4.299.543-.055.846c.296.02.639.042.84.072.176.026.35.061.524.101-.023-.369-.02-.651.064-.651.09 0 1.267.317 2.58.679 1.99.588 3.167.633 6.877.27 3.213-.361 5.747-.316 9.05.046 4.027.453 5.746.362 5.067-.271-.543-.543-9.91-1.086-14.253-.86-4.298.226-5.882.09-11.674-.996l-6.696-1.312-7.556.86c-7.42.77-20.09.77-29.773-.045-2.806-.227-3.756-.09-6.742.905-2.534.905-5.023 1.312-9.185 1.628-3.122.227-6.788.725-8.1 1.132-3.393 1.04-5.249 1.13-9.32.407-3.35-.543-3.62-.543-5.476.362l-1.945.95-2.353-.995-2.353-1.04-2.172.95c-3.122 1.357-7.692 1.176-10.362-.317-1.855-1.086-2.126-1.132-4.524-.634-2.172.407-3.077.362-6.154-.362-2.398-.588-5.203-.905-8.416-.905-4.027 0-4.887-.135-5.113-.724-.18-.452-.543-.633-.995-.452-.453.181-1.63-.272-2.851-1.04-1.131-.725-3.8-1.992-5.927-2.806-5.068-1.9-9.186-1.946-15.158-.181-5.475 1.674-5.701 1.674-6.606-.272-1.136-2.308-2.04-2.85-5.117-3.122l-2.764-.229-.136-2.397-.136-2.398 1.494.135c1.13.09 1.538.407 1.764 1.267.317 1.131.317 1.131.362.09.045-.904.226-1.04 1.312-.814 3.439.633 6.335.77 6.652.272.588-.95-.905-1.856-4.073-2.353l-3.077-.499.316-6.787c.181-3.71.453-7.058.588-7.375.136-.407.996-.633 2.444-.633 1.9 0 2.217-.136 2.217-.905 0-.543-.362-.95-.996-1.131-.916-.17-7.024-.366-10.46-.376zM185.32 43.13a.506.506 0 01.048.013c.014.005-.02-.006-.048-.013zM62.63 76.867zm42.993 3.461v0zM149.647 42.669c-.013 0 .065.055.082.035l.006-.007a1.993 1.993 0 00-.084-.027l-.004-.001z" />
        <path d="M120.908 43.038a.669.669 0 00-.112.013c-.407.087-.356.613-.152 2.513.136 1.448.452 4.253.679 6.244.226 1.991.407 4.027.407 4.525-.045.905-.046.905-.724 0-5.928-7.918-7.285-9.004-6.832-5.475.724 5.158.86 9.186.361 9.502-.904.589-.588 1.72.498 1.539.95-.136.995-.317.86-4.344-.046-2.263.045-4.163.271-4.163.317.045 5.159 5.747 6.652 7.918.814 1.132 1.131.815 1.674-1.538.362-1.584.271-2.172-.543-3.756-.77-1.493-1.04-3.077-1.267-7.375-.272-5.203-.317-5.43-1.312-5.565a2.8 2.8 0 00-.46-.038zM54.256 43.985c-.684.028-1.907.193-3.927.448-2.805.362-11.674 2.715-12.217 3.303-.09.09-.045.408.136.679.181.317 1.312.362 3.303.18 1.675-.18 3.349-.361 3.71-.361.725-.045 1.72 4.706 1.765 8.461.09 4.163-3.529 6.018-7.963 4.163-1.81-.77-2.353-.588-1.539.407.996 1.177 4.434 2.217 6.425 1.946 2.398-.317 4.797-2.534 5.25-4.797.27-1.583-.408-8.551-.996-10.09-.272-.633.18-.86 2.443-1.312 2.217-.407 2.986-.814 3.71-1.81.679-.933 1.04-1.265-.1-1.217zM133.177 45.338c-2.307 2.398-3.89 6.38-4.117 10.407-.226 4.117.045 5.43 1.357 6.697 2.353 2.171 5.747.633 8.054-3.665 1.9-3.53 2.444-8.733 1.177-11.177-.407-.814-.905-1.447-1.131-1.447-.181 0-.272 1.583-.136 3.529.271 4.615-.724 8.235-2.85 10.361-3.847 3.846-5.611-.543-3.123-7.918 1.222-3.665 2.941-6.425 4.072-6.425.317 0 .634-.317.634-.679 0-.362-.272-.678-.634-.678s-.905-.09-1.267-.227c-.316-.135-1.266.408-2.036 1.222zM146.616 44.75c-1.131.317-1.177.498-.95 3.077l.09 1.267.498-1.132.498-1.13.18 1.13c.272 1.9 1.991 9.23 2.444 10.317.588 1.493.498 2.353-.272 2.353-.362 0-.678.18-.678.407 0 .95.588 1.855 1.176 1.855.362 0 .86.453 1.086.995.272.724.407.815.407.272.046-.407.317-.814.634-.95.407-.136.407-.407 0-1.131-.317-.498-.679-1.946-.86-3.213-.271-2.081-.226-2.308.543-2.308 1.448 0 5.566-2.67 6.29-4.072 1.493-2.94.316-5.701-3.123-7.285-1.9-.86-5.746-1.086-7.963-.452zm6.651 1.9c1.81.679 3.756 2.67 3.756 3.801 0 1.357-1.72 2.805-4.48 3.846-1.764.679-2.398.77-2.534.362-.09-.317-.543-2.172-1.04-4.117-.77-3.213-.77-3.575-.136-3.937.995-.588 2.896-.543 4.434.045zM61.098 49.999c-.271.723-.362 3.574-.18 7.375.27 5.656.542 6.832 1.583 6.877.407 0 .995-3.438.95-5.565 0-.905.136-1.674.272-1.674.18 0 1.855 1.538 3.755 3.439 2.85 2.805 3.62 3.393 4.434 3.122.905-.272.589-.679-3.122-4.163-2.217-2.127-4.072-3.982-4.072-4.208 0-.181 1.81-1.312 4.027-2.489 3.8-1.99 5.022-3.076 4.163-3.62-.226-.09-2.263.815-4.525 2.037-2.308 1.267-4.344 2.262-4.525 2.262-.18 0-.543-.95-.769-2.127-.452-2.443-1.312-2.986-1.99-1.266zM105.938 48.867c-.226 0-.497.86-.588 1.9-.271 2.173-2.081 6.697-2.67 6.697-.226 0-.995-1.176-1.719-2.624-1.222-2.398-2.579-4.118-2.94-3.665-.453.588-1.992 11.538-1.63 11.629.272.09.453.995.453 2.036.045 1.538.135 1.764.497 1.086.272-.453.363-1.131.227-1.448-.136-.362-.046-.77.18-.905.181-.136.634-1.72.906-3.53.769-4.705.814-4.75 1.81-3.122.497.77.769 1.674.678 2.036-.135.317.045.95.362 1.403.86 1.132 2.308.634 1.99-.633-.135-.543.363-2.127 1.177-3.71l1.403-2.806 1.448 4.48c.77 2.488 1.584 5.339 1.81 6.334.271 1.222.678 1.855 1.267 1.946.724.181.814 0 .543-1.538-.543-2.76-4.797-15.566-5.204-15.566zM177.791 51.265c-4.796 3.213-3.8 10.498 1.81 13.213 1.403.678 1.855 1.176 1.9 2.036.046 1.04.091 1.04.363-.181.18-.95.633-1.448 1.538-1.674.724-.181 1.584-.589 1.946-.905.724-.588.905-.453 4.117 2.398 1.086.95 2.217 1.72 2.625 1.72.814 0 .904-.725.135-1.041-.316-.136-.18-.272.272-.272.86-.045.86-.09-.046-1.086-.497-.543-1.176-1.448-1.447-1.99-.272-.544-1.086-1.313-1.765-1.765-1.222-.68-1.267-.905-1.086-2.896.271-2.941-.543-5.068-2.67-6.968-1.493-1.403-2.081-1.63-3.981-1.63-1.494 0-2.625.318-3.71 1.041zm6.47 1.313c1.946.724 3.259 4.524 2.354 6.877-.227.543-.634.453-2.399-.678-1.221-.724-2.533-1.313-2.94-1.313-1.041 0-.906 1.222.226 2.172 3.257 2.625 3.393 2.76 2.67 3.258-.951.588-3.168.543-4.526-.136-1.493-.769-3.167-3.8-3.167-5.837 0-2.036 1.72-4.253 3.756-4.796 1.448-.407 1.855-.362 4.027.453zM81.776 50.949c-.18.18-.316 2.715-.316 5.656 0 4.886-.091 5.384-.905 5.837-.498.271-1.086.86-1.358 1.357-.407.77-.317.995.679 1.357.995.362 1.131.68 1.131 2.715 0 1.584.136 2.217.498 1.991.317-.18.407-1.086.271-2.534-.271-2.036-.18-2.217.86-2.624 1.538-.588 1.448-.634 1.674.77l.181 1.266.09-1.312c.046-.95.227-1.222.77-.996 1.312.498 8.325.86 8.325.408 0-.453-1.221-.905-6.425-2.398L83.767 61.4l-.136-5.249c-.09-4.298-.271-5.249-.814-5.384-.407-.046-.86 0-1.04.18zM28.068 74.658c0 .272.226.86.497 1.313.362.497.407 1.312.181 2.126-.226.724-.362 1.448-.316 1.63.045.135.135 2.261.271 4.75l.181 4.434h1.267c1.267 0 1.267 0 1.131-2.896l-.136-2.85 1.539 1.04c.814.589 3.53 3.032 6.063 5.476 2.489 2.443 4.706 4.434 4.841 4.434.181 0 .317-.362.317-.815 0-.497-2.262-3.076-5.158-5.882-2.85-2.805-5.023-5.158-4.887-5.249.181-.09.905-.271 1.63-.452 2.216-.543 3.438-1.629 3.438-3.077 0-1.9-.77-3.077-2.489-3.8-1.81-.725-8.37-.86-8.37-.182zm8.551 3.349c.86 1.04-.09 2.307-2.126 2.896-2.67.814-2.806.723-2.806-1.494v-2.036h2.217c1.358 0 2.399.226 2.715.634zM163.715 75.54a.934.934 0 00-.164.027c-.758.19-1.879 1.331-3.406 3.48-1.358 1.901-2.58 3.665-2.76 3.937-.136.226-1.765-.86-3.53-2.443-2.579-2.263-3.348-2.76-3.665-2.218-.724 1.132-.226 1.946 2.625 4.027 1.538 1.132 2.805 2.218 2.805 2.399.046.18-1.222 2.171-2.715 4.343-2.805 4.027-3.031 5.023-1.176 5.023.995 0 2.308-1.675 4.298-5.656.498-.996 2.399-3.53 4.163-5.61 4.027-4.752 4.706-5.747 4.344-6.607-.178-.49-.45-.726-.819-.702zM62.629 76.867zM54.854 77.418c-2.896.498-4.887 1.448-5.52 2.715-.77 1.403-.317 1.991 2.67 3.575 3.076 1.629 6.38 4.932 6.38 6.29 0 1.99-4.118 4.072-6.697 3.438-1.765-.452-3.71-1.99-3.71-2.986 0-.543-.317-.86-.906-.86-1.04 0-1.13.77-.316 1.855.86 1.177 3.982 3.122 4.886 3.122.77 0 .86.407.95 3.484l.091 3.53.136-3.303c.136-2.308.362-3.258.77-3.258.452 0 .542.724.361 3.167-.136 2.172-.045 3.167.317 3.167.317 0 .498-1.086.498-3.167 0-2.67.135-3.213.904-3.62.86-.452.905-.316.996 3.258l.09 3.756.136-3.53c.181-3.484.226-3.574 2.036-5.339 1.674-1.584 1.81-1.9 1.584-3.393-.362-2.263-2.217-4.48-5.475-6.607-1.493-.95-2.76-2.036-2.76-2.307 0-.317.905-.634 2.127-.77 2.08-.27 4.208-1.538 3.71-2.307-.136-.226-.362-.362-.543-.362-.181.045-1.403.226-2.715.452zM101.368 77.826c-.135 0-.497.18-.86.407-.95.588-.407 3.303 1.54 8.009.904 2.217 1.809 4.615 1.99 5.384.226 1.04.543 1.358 1.402 1.358.86 0 1.132-.227 1.132-.95.045-.499 1.357-2.76 3.031-4.978 4.118-5.61 5.204-7.873 3.756-7.873-.362 0-1.72 1.584-3.032 3.484a177.828 177.828 0 01-3.574 5.249l-1.222 1.72-1.945-5.928c-1.086-3.212-2.082-5.882-2.218-5.882zM146.254 78.278c-.498 0-1.765 1.358-3.213 3.394-1.357 1.855-2.534 3.393-2.624 3.393-.045 0-.86-.814-1.765-1.81-3.077-3.393-4.434-1.764-1.629 1.946l1.81 2.398-2.217 2.896c-1.765 2.307-2.172 3.168-1.945 4.072.135.634.361 1.222.497 1.358.362.316 3.258-3.168 4.254-5.113l.904-1.72 1.991 2.489c1.855 2.217 3.575 3.439 4.118 2.85.226-.226-1.946-4.072-3.53-6.334l-.904-1.222 1.674-2.624c.95-1.403 2.081-3.122 2.534-3.8 1.086-1.54 1.086-2.173.045-2.173zM172.045 79.726c.136 1.493.136 1.493 3.303 1.855 5.973.634 5.927.407.543 5.61-2.624 2.49-4.615 4.707-4.434 4.933.135.226 1.04.77 1.99 1.176 1.63.77 1.72.77 3.53-.18 1.674-.86 2.262-.906 7.466-.634 5.927.317 5.61.407 5.791-1.674.046-.408-1.764-.588-7.103-.77l-7.104-.226 4.389-3.846c3.303-2.896 4.434-4.163 4.434-4.977v-1.086l-4.977.136c-4.48.09-5.113 0-6.2-.815-1.583-1.267-1.81-1.221-1.628.498zM94.126 79.79a2.16 2.16 0 00-.993.343c-.86.498-1.493 2.534-1.945 6.29-.407 3.529-1.041 5.34-2.172 6.108-.815.589-2.896.95-3.077.543-.045-.045-.18-2.398-.362-5.158-.317-5.204-.86-6.742-1.945-5.656-.408.407-.589 2.126-.589 5.203 0 5.158.543 6.833 2.58 7.964 1.085.633 1.447.633 3.167.045 2.488-.86 3.665-2.896 4.389-7.828.316-2.036.86-4.026 1.267-4.479.724-.77.633-3.167-.09-3.348a.573.573 0 00-.23-.027zM132.68 80.631c-.905 1.086-2.67 6.335-3.484 10.09-.408 1.991-.77 3.665-.86 3.71-.272.272-2.67-9.728-2.715-11.311-.045-1.9-.724-2.127-2.036-.815-.95.95-2.308 4.887-2.308 6.652 0 .588-.18 1.13-.407 1.267-.18.135-.498-1.358-.633-3.304-.227-3.846-.86-5.474-1.991-5.474-.634 0-.679.452-.453 3.529.136 1.9.588 4.706.996 6.199.362 1.448.678 3.348.678 4.162 0 3.258 1.494 1.222 3.168-4.343.633-2.036 1.13-3.077 1.357-2.715.181.362.77 2.443 1.358 4.615.86 3.258 1.266 4.118 2.126 4.525.679.271 1.222.317 1.493.045.498-.498 4.66-16.334 4.435-17.013-.09-.271-.408-.18-.724.181zM63.044 83.98c-.317.904.588 1.538 2.262 1.538 1.267 0 1.267 0 1.04 2.353-.768 7.601-.768 7.918-.044 8.506.362.317.86.453.995.272.181-.181.634-2.67 1.04-5.566.453-3.484.906-5.339 1.313-5.475.498-.18.543.453.271 3.077-.226 2.353-.18 3.213.181 2.986.272-.18.498-1.402.543-2.67.046-1.854.136-2.126.408-1.22.362 1.085.362 1.04.407-.363.045-1.538.452-1.674 4.117-1.538 1.132.045 1.132.045-.135-.498-.68-.271-1.177-.724-1.041-1.04.271-.77-1.81-1.087-6.832-1.087-3.484 0-4.299.136-4.525.724z" />

        {lightBulbConfigs.map(lightBulbConfig =>
            <LightBulbSvgPath
                key={lightBulbConfig.letter}
                coordinates={lightBulbConfig.pathCoordinates}
                hexColor={lightBulbConfig.hexColor}
                on={Math.random() > 0.5}
                clickHandler={() => alert('Time to do some stuff!')}
            />
        )}
    </svg>;

export default LightsWallSvg;
