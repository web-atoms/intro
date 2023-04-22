var spawn = require('child_process').spawn;
spawn('tsc', ['--watch'], {
    detached: true
});
spawn('http-server', [], {
    detached: true
});
