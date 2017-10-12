console.log('Loading promise Demo 2');

var asyncAdd = (a, b) =>
{
    return new Promise( (resolve, reject) => {
        setTimeout(() => { if(typeof a === 'number' && typeof b === 'number'){
            resolve(a + b); 
        } else { 
            reject('Please enter valid numbers for parameters.')
        }
    }, 2000);

    });
}


asyncAdd(23, 'Bhankas').then((result) => console.log(`The addition is ${result}`),
 (error) => console.log(`The error is ${error}`));