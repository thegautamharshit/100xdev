// const express = require("express");
// const app = express();

// app.get("/health-checkup",function(req,res){
//     const kidneyId = req.query.kidneyId;
//     const username = req.headers.username;
//     const password = req.headers.password;


//     if(username != "harshit" && password != "pass"){
//         res.status(403).json({
//             msg: "User doesn't exist"
//         });
//         return;
//     }
//     if(kidneyId !=1 && kidneyId !=2){
//         res.status(411).json({
//             msg: "wrong inputs",
//         });
//         return;
//     }

//     res.send("your heart is healthy");
// });

// app.listen(3000);

// -----------Created a function called validator----------

// const express = require("express");
// const app = express();

// function usernameValidator(username,password){
//     if(username != "harshit" && password != "pass"){
//         return false;
//     }
//     return true;
// }
// function kidneyValidator(kidneyId){
//     if(kidneyId !=1 && kidneyId !=2){
//         return false;
//     }
//     return true;
// }

// app.get("/health-checkup",function(req,res){
//     const kidneyId = req.query.kidneyId;

//     if(!usernameValidator(req.headers.username,req.headers.password)){
//         res.status(403).json({
//             msg: "user doesn't exist",
//         });
//         return;
//     }

//     if(!kidneyValidator(kidneyId)){
//         res.status(411).json({
//             msg: "Wrong input"
//         })
//         return;
//     }

//     res.send("your heart is healthy");
// });

// app.put("/replace-kidney", function(req,res){
//     const kidneyId = req.query.kidneyId;
//     const username = req.headers.username;
//     const password = req.headers.password;

//     if(!usernameValidator(username,password)){
//         res.status(403).json({
//             msg: "User doesn't exist",
//         })
//         return;
//     }

//     if(kidneyValidator(kidneyId)){
//         res.status(411).json({
//             msg: "wrong inputs",
//         })
//         return;
//     }

//     res.send("your heart is healthy");
// })

// app.listen(3000);


// ________________Middleware________________________

const express = require("express");
const app = express();

function userMiddleware(req,res,next){
    if(username!="harshit" && password!= "pass"){
        res.status(403).json({
            msg:"Incorrect Id or Password",
        });
    }else{
        next();
    }
};

function kidneyMiddleware(req,res,next){
    if(kidneyId!=1 && kidneyId!=2){
        res.status(403).json({
            msg: "Incorect kidney inputs",
        });
    }else{
        next();
    }
};

app.get("/health-checkup",userMiddleware,kidneyMiddleware,function(req,res){
    res.send("your heart is healthy");
});

app.get("/kidney-check",userMiddleware,kidneyMiddleware,function(res,res){
    res.send("your heart is healthy");
})

app.get("/heart-check",userMiddleware,kidneyMiddleware,function(req,res){
    res.send("your heart is healthy");
})

