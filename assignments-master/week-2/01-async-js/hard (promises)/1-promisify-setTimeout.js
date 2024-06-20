/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

// function wait(n) {
//     let promiseObject = new Promise(function(resolve){
//         setTimeout(resolve, n*1000)
//     })
//     return promiseObject;
// }

// module.exports = wait;

// --------------------------------------

function wait(n){
    return new Promise((resolve)=>{
        setTimeout(resolve,n*1000);
    })
}

module.exports = wait;