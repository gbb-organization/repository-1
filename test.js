process.stdout.write('Running succeed on node 5 only test\n');

setInterval(function () {
    process.stdout.write('.');
}, 1000);

setTimeout(function () {
    /*eslint-disable no-process-exit*/
    if (/^v5\./.test(process.version)) {
        process.stdout.write('\nTest passed');
        process.exit(0);
    }

    process.stdout.write('\nNode version is ' + process.version + ' instead of v5.x');
    process.exit(1);
    /*eslint-enable no-process-exit*/
}, 10000);
