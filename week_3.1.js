//MIDDLEWARE,GLOBAL-CATCHES & ZOD

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

// const express = require("express");
// const app = express();

// app.use(express.json());

// function userMiddleware(req,res,next){
//     if(username!="harshit" && password!= "pass"){
//         res.status(403).json({
//             msg:"Incorrect Id or Password",
//         });
//     }else{
//         next();
//     }
// };

// function kidneyMiddleware(req,res,next){
//     if(kidneyId!=1 && kidneyId!=2){
//         res.status(403).json({
//             msg: "Incorect kidney inputs",
//         });
//     }else{
//         next();
//     }
// };


// app.get("/health-checkup",userMiddleware,kidneyMiddleware,function(req,res){
//     res.send("your heart is healthy");
// });

// app.get("/kidney-check",userMiddleware,kidneyMiddleware,function(res,res){
//     res.send("your heart is healthy");
// })

// app.get("/heart-check",userMiddleware,kidneyMiddleware,function(req,res){
//     res.send("your heart is healthy");
// })

// app.listen(3000,()=>{
//     console.log("Server is runnig on port no 3000")
// });


//------------------when user sends wrong body-------------------

// In the back with the help of postman we are sending json post request { "kidneys":[1,2] } in body

// const express = require("express");
// const app = express();
// let errorCount = 0;

// app.use(express.json());

// app.post("/health-checkup",function(req,res){
//     const kidneys = req.body.kidneys;

//     //VALIDATION CHECK so that our data is not revealed outside(another way is to use global catch)
//     // if(!kidneys){
//     //     res.json({
//     //         msg: "Wrong Inputs"
//     //     })
//     //     return;
//     // }

//     const kindeyLength = kidneys.length;
//     res.send("your kidney lenght is "+ kindeyLength);
// });

// //GLOBAL CATHES(another middleware that we put at the end)
// // also know as ERROR-HANDLING MIDDLEWARE

// app.use(function(err,req,res,next){
//     errorCount++;//we can track the number of exception by this
//     res.json({
//         msg:"sorry somthing is wrong with our server"
//     })
// }) // It help us hide the exception and if above code fails to run then this get executed with msg

// app.listen(3000);


//------------------------------ZOD-------------------------------------
// Zod is a typescript first schema declaration and validation library for React applications.
// It allow us to define the expected structure, data types, and validationrules for our applications input,
// which helps us catch error early and ensure that our data is in a valid state.
// well suited for form validation
//npm install zod 


//simple example --------------------------------------------------------

const zod = require("zod");

function validateInput(arr){
    const schema = zod.array(zod.number());

    const response = schema.safeParse(arr);
    console.log(response);
}

validateInput([1,2,3]);


// ---------------------------------------------------------------------------

const express = require("express");
const app = express();

const zod = require("zod");

const schema = zod.array(zod.number());

//zod syntax for email,pass,and country literal is like this
// const schema_example = zod.object({
//     email:zod.string(),
//     password:zod.string(),
//     country:zod.literal("IN").or(z.literal("US")),
//     number:zod.number(),
//     kidneys:zod.array(zod.number()),
// })

app.use(express.json());

app.post("/health-checkup",function(req,res){
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)

    if(!response.success){
        res.status(411).json({
            msg: "input is invalid",
        })
    } else {
        res.send({
            response
        })
    }
});

app.listen(3000);





