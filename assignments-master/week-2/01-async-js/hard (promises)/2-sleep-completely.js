/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

// function sleep(milliseconds) {
//     let promiseobject = new Promise(function(resolve){
//         let startTime = Date.now();
//         let endTime = startTime + milliseconds;

//         while(Date.now()<endTime){

//         }
//         resolve();
//     })
//     return promiseobject;
// }

// module.exports = sleep;

// ----------------------------------------------------------

// function sleep(milliseconds){
//     return new Promise((resolve)=>{
//         let startTime = Date.now();
//         let endTime = startTime + milliseconds;

//         while(Date.now() < endTime){

//         }
//         resolve();
//     })
// }

// module.exports = sleep;


// --------------------------------------------------------------

function sleep(milliseconds){
    return new Promise(function(resolve){
        // setTimeout(() => {
        //     resolve();
        // }, milliseconds);

        setTimeout(resolve,milliseconds);
    })
}

module.exports = sleep;


