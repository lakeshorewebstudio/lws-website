const liveServer = require('live-server');

const params = {
    port: 3000,
    host: '0.0.0.0',
    open: true,
    ignore: 'node_modules',
    file: 'dist/index.html',
    wait: 1000,
    logLevel: 2,
};

liveServer.start(params);
