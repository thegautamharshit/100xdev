// Async function -------------------------------

// function findsum(n){
//     let ans = 0;
//     for(let i=0;i<n;i++){
//         ans+=i;
//     }
//     return ans;
// }

// function findsumTill100(){
//     console.log(findsum(100));
// }

// setTimeout(findsumTill100,8000);
// console.log("hello world");

// --------------------

// const fs = require("fs");
// fs.readFile('sample.txt','utf-8',function(err,data){
//     console.log(data);
// });

// console.log("Reading File");


// ---------------------------------------------

// const { on } = require("events");
// const fs = require("fs");

// function harshitReadFile(cb){
//     fs.readFile('sample.txt','utf-8',function(err,data){
//         cb(data);
//     });
// }

// function onDone(data){
//     console.log(data);
// }

// harshitReadFile(onDone);


// -------------------------||||||||||||||------------------

// const fs = require("fs");

// function harshitReadFile(){
//     return new Promise(function(resolve){
//         fs.readFile('sample.txt','utf-8',function(err,data){
//             resolve(data);
//         });
//     });
// }

// function onDone(data){
//     console.log(data);
// }

// harshitReadFile().then(onDone);

// --------------------|||||||||||||||||--------------------

// var d = new Promise(function(resolve){
//     resolve("Harshit");
// });

// function callback(){
//     console.log(d);
// }

// d.then(callback);

// ------------------Normal Syntax ---------------

// function harshitReadFile(){
//     let p = new Promise(function(resolve){
//         resolve("Hi Harshit");
//     });
//     return p;
// }

// function main(){
//     harshitReadFile().then(function(value){
//         console.log(value);
//     });
// }

// main();

// -------------------Async/Await Syntax-------------

// function harshitReadFile(){
//     let p = new Promise(function(resolve){
//         setTimeout(() => {
//         resolve("Hello Harshit");
//         }, 2000);
//     });
//     return p;
// }

// async function main(){
//     const value = await harshitReadFile();
//     console.log(value);
// }

// main();








//-----------------------------Practice------------------------------Rough work/revision

const { on } = require("events")
const fs = require("fs")

// function ReadingFile(files){
//     fs.readFile("sample.txt","utf-8", function(err,data){
//         files(data)
//     })
// }


function harshitReadFile(){
    return new Promise(function(resolve){
        fs.readFile("sample.txt","utf-8", function(err,data){
            resolve(data)
        })
    })
}

function onDone(data){
    console.log(data)
}

harshitReadFile().then(onDone)
