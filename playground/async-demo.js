console.log('Starting app..');

setTimeout( () => {
    console.log('Timeout of 2000 ms');
}, 2000);

setTimeout(() => {
    console.log('Timeout of 0 ms');
}, 0);

console.log('Finished app..');
