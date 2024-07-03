// let a =1;
// console.log(a);

// const fs = require('fs');

// fs.readFile("sample.txt","utf-8",(err,data) => {
//     console.log("data read frm the file is ")
//     console.log(data);
// });

// let ans =0;
// for(let i=0;i<100;i++){
//     ans+=i;
// }
// console.log(ans);

//---------------------PROMISES--------------------------


// const fs = require('fs');

// function readandwritetofile(cb) {
//     fs.readFile("sample.txt", "utf-8", function(err, data) {
//         if (err) {
//             console.error("Error reading file:", err);
//             return;
//         }
//         data = data + " WRITTEN FROM CODE";
//         fs.writeFile("sample.txt", data, "utf-8", function(err) {
//             if (err) {
//                 console.error("Error writing file:", err);
//                 return;
//             }
//             console.log(data); // Log the data after writing
//             cb();
//         });
//     });
// }

// readandwritetofile(function() {
//     console.log("Content written successfully");
// });

//-----------------simple callback-----------------------

// function myownSetTimout(fn, duration){
//     setTimeout(fn,duration);
// }

// myownSetTimout(function(){
//     console.log("Hi, Harshit");
// },1000);


//--------------------using promises -----------------------

// function myownSetTimout(duration){
//     let p = new Promise(function(resolve){
//         setTimeout(resolve,1000);
//     });

//     return p;
// }

// myownSetTimout(1000).then(function(){
//     console.log("log the first things")
// });


//----------------callback hell ---------------------

// function myownSetTimout(fn,duration){
//     setTimeout(fn,duration)
// }

// myownSetTimout(function(){
//     console.log("log the first thing");
//     myownSetTimout(function(){
//         console.log("log the second thing");
//     },2000);
// },1000)



//--------------------------------------
//How promise are resolved and rejected

// let promise = new Promise(function(resolve,reject){
//     resolve("I am done");
// });

// let promise = new Promise(function(resolve,reject){
//     reject(new Error('Something is not right!'));
// });


// let promise = new Promise(function(resolve,reject){
//     resolve("I am surely going to get resolved!");

//     reject(new Error('will this be ignored?'));//ignored
//     resolve("Ignored?")//ignored
// });

// //In the above example only the first one to resolve will be called and the rest will be ignored


// let promise = new Promise(function(resolve,reject){
//     resolve("I am Resolved!")
// });//executer function

// const consumer = () => {
//     promise.then(
//         result => {},
//         error => {}
//     )
// }// consuming function

// promise.then(
//     (result)=>{
//         console.log(result);
//     },
//     (error)=>{
//         console.log(error);
//     }
// );

//----------------SYNTAX-------------------
// function getPromise(URL) {
//     let promise = new Promise(function (resolve, reject) {
//       let req = new XMLHttpRequest();
//       req.open("GET", URL);
//       req.onload = function () {
//         if (req.status == 200) {
//           resolve(req.response);
//         } else {
//           reject("There is an Error!");
//         }
//       };
//       req.send();
//     });
//     return promise;
//   }


// //______________Get 50 Pokemon's Information___________

// const ALL_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon?limit=50';

// // We have discussed this function already!
// let promise = getPromise(ALL_POKEMONS_URL);

// const consumer = () => {
//     promise.then(
//         (result) => {
//             console.log({result}); // Log the result of 50 Pokemons
//         },
//         (error) => {
//             // As the URL is a valid one, this will not be called.
//             console.log('We have encountered an Error!'); // Log an error
//     });
// }

// consumer();


//-----------------------------------------------------

// let promise = new Promise(function(resolve,reject){
//     const x = "Harshit";
//     const y = "Harshit";

//     if(x==y){
//         resolve();
//     }else{
//         reject();
//     }
// });

// promise.then(function(){
//     console.log("success");
// }).catch(function(){
//     console.log("some error");
// });


//------------------------------------------------

// let promise = new Promise(function(resolve,reject){
//     resolve("Harshit Gautam");
// })

// promise.then(function(sucessmsg){
//     console.log(sucessmsg);
// },function(errormsg){
//     console.log(errormsg);
// });


// --------------------------------------------------

// let promise = new Promise(function(resolve,reject){
//     reject("Harshit Gautam");
// });

// promise.then(function(sm){
//     console.log(sm);
// },function(errormsg){
//     console.log(errormsg);
// })

// --------------------------------------------------










