console.log('Within promise file');


var firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Whatever you say sir..'), 5000);
    reject('you can go to hell.');
});

firstPromise.then((test) => {
    console.log(test);
}, (errorMsg) => {
    console.log(errorMsg);
});