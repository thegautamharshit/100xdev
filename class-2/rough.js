// function square(n){
//     return n*n
// }

// const { map } = require("zod");

// function cube(n){
//     return n*n*n
// }

// function sumofsomething(a,b,fn){
//     let sq1 = fn(a)
//     let sq2 = fn(b)
//     return sq1 + sq2
// }

// //function argument
// let ans = sumofsomething(1,2,square)
// console.log(ans)


// function onDone(){
//     console.log("Hlo")
// }

// setTimeout(onDone,1000)
// console.log("After Timout")


// let a = 1;
// console.log(a)
// const fs = require('fs')

// fs.readFile("sample.txt", "utf-8", (err,data)=>{
//     data+= "Hello New things added"
//     fs.writeFile("sample.txt",data, "utf-8",(err,data)=>{
//         console.log("success")
//     })
// })

// let ans = 0;
// for(let i=0; i<100; i++){
//     ans+=i;
// }
// console.log(ans)


// function myownSetTimout(fn, duration){
//     setTimeout(fn, duration)
// }

// myownSetTimout(function(){
//     console.log("Hi, It's Me.")
// },2000)

// function myownSetTimout(duration){
//     let p = new Promise(function(resolve){
//         setTimeout(resolve,duration);
//     });
//     return p;
// }

// myownSetTimout(3000).then(function(){
//     console.log("Log the first thing")
// })
// myownSetTimout(1000).then(function(){
//     console.log("wow")
// })


// function calculateSum(n){
//     let ans = 0;
//     for (let i=0;i<=n;i++){
//         ans+=i;
//     }
//     return ans
// }


// const express = require("express")

// const app = express()

// function sumofsomething(n){
//     let ans = 0;

//     for(let i=1; i<=n; i++){
//         ans+=i;
//     }
//     return ans;
// }

// app.get("/",(req,res)=>{
//     const n = parseInt(req.query.n);
//     const sum = sumofsomething(n);
//     res.send("Hello, Your answer is "+ sum);
// });

// app.listen(3000,()=>{
//     console.log("Server is UP and running on port 3000")
// });

// const express = require("express");
// const app = express();

// var users=[{
//     name: 'Harshit',
//     kidneys:[{
//         healthy: false
//     },]
// }]

// app.get("/",(req,res)=>{
//     const user_kidneys = users[0].kidneys;
//     const numberOfKidneys = user_kidneys.length;
//     console.log(user_kidneys.length)
//     let numberOfHealthyKidneys = 0;
//     for(let i=0; i < user_kidneys.length;i++){
//         if(user_kidneys[i].healthy){
//             numberOfHealthyKidneys+=1;
//         }
//     }
//     const numberOfUnHealthyKidneys =numberOfKidneys - numberOfHealthyKidneys 
//     res.json({
//         numberOfKidneys,
//         numberOfHealthyKidneys,
//         numberOfUnHealthyKidneys
//     })
// })

// app.put("/",(req,res)=>{
//     for( let i = 0; i<users[0].kidneys.length;i++){
//         users[0].kidneys.healthy = true;
//     }
//     res.json({
//     })
// })

// app.use(express.json());

// app.post("/",(req,res)=>{
//     const isHealthy = req.body.isHealthy;
//     users[0].kidneys.push({
//         healthy: isHealthy
//     })
//     res.json({
//         msg: "Done"
//     })
// })

// app.delete("/",(req,res)=>{

// })

// app.listen(3000,()=>{
//     console.log("Server is UP and running on port 3000")
// });

// const input = [1,2,3,4,5];

// function filterlogic(n){
//     if (n % 2 == 0){
//         return true
//     }else{
//         return false
//     }
// }

// const ans = input.filter(filterlogic)
// console.log(ans)

// const express = require("express")
// const app = express();

// app.get("/health-checkup",(req,res)=>{

//     const Id = req.query.Id;
//     const username = req.headers.username;
//     const password = req.headers.password;

//     if (username!= "harshit" && password!="pass"){
//         res.status(403).json({
//             msg: "User doesn't exist",
//         });
//         return;
//     }
    

//     if (Id != 1 && Id !=2){
//         res.status(411).json({
//             msg: "Wrong Input"
//         });
//         return;
//     }

//     res.send("You seems healthy")
// });

// app.listen(3000,()=>{
//     console.log("Server is UP and running on port 3000")
// });

const express = require("express")
const app = express()
const zod = require('zod')

function validateInput(obj){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })

    const response = schema.safeParse(obj)
    console.log(response);
}

// validateInput({
//     email: "harshit@gmail.com",
//     password: "23"
// });

app.post('login',(req,res)=>{
    const input = req.body;
    if(!response.success){
        res.json({
            msg: "Invalid Input"
        })
    }
})

