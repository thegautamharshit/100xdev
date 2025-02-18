// const express = require("express");
// const jwt = require("jsonwebtoken");
// const jwtPassword = "123456";

// const app = express();
// app.use(express.json());

// const ALL_USERS = [
//   {
//     username: "harkirat@gmail.com",
//     password: "123",
//     name: "harkirat singh",
//   },
//   {
//     username: "raman@gmail.com",
//     password: "123321",
//     name: "Raman singh",
//   },
//   {
//     username: "priya@gmail.com",
//     password: "123321",
//     name: "Priya kumari",
//   },
// ];

// function userExists(username, password) {
//   let userExists = false;
//   for(let i = 0; i<ALL_USERS.length;i++){
//     if(ALL_USERS[i].username == username && ALL_USERS[i].password == password){
//         userExists = true;
//     }
//   }
//   return userExists;
// }

// app.post("/signin", function (req, res) {
//   const username = req.body.username;
//   const password = req.body.password;

//   if (!userExists(username, password)) {
//     return res.status(403).json({
//       msg: "User doesnt exist in our in memory db",
//     });
//   }

//   var token = jwt.sign({ username: username }, "shhhhh");
//   return res.json({
//     token,
//   });
// });

// app.get("/users", function (req, res) {
//   const token = req.headers.authorization;
//   try {
//     const decoded = jwt.verify(token, jwtPassword);
//     const username = decoded.username;
//     // return a list of users other than this username

//     res.json({
//         users: ALL_USERS.filter(function(value){
//             if (value.username == username){
//                 return false
//             }else{
//                 return true;
//             }
//         })
//     })
//   } catch (err) {
//     return res.status(403).json({
//       msg: "Invalid token",
//     });
//   }
// });

// app.listen(3000,()=>{
//     console.log("Server is Running")
// });


// const express = require("express");
// const jwt = require("jsonwebtoken");
// const mongoose = require("mongoose");
// const jwtPassword = "123456";

// mongoose.connect(
//   "your_mongo_url",
// );

// const User = mongoose.model("User", {
//   name: String,
//   username: String,
//   pasword: String,
// });

// const app = express();
// app.use(express.json());

// function userExists(username, password) {
//   // should check in the database
// }

// app.post("/signin", async function (req, res) {
//   const username = req.body.username;
//   const password = req.body.password;

//   if (!userExists(username, password)) {
//     return res.status(403).json({
//       msg: "User doesnt exist in our in memory db",
//     });
//   }

//   var token = jwt.sign({ username: username }, "shhhhh");
//   return res.json({
//     token,
//   });
// });

// app.get("/users", function (req, res) {
//   const token = req.headers.authorization;
//   try {
//     const decoded = jwt.verify(token, jwtPassword);
//     const username = decoded.username;
//     // return a list of users other than this username from the database
//   } catch (err) {
//     return res.status(403).json({
//       msg: "Invalid token",
//     });
//   }
// });

// app.listen(3000);

//--------------------------------------------------------------------

// const mongoose = require('mongoose');
// mongoose.connect("mongodb+srv://thegautamharshit:iwtomyMDB21@cluster0.i3871.mongodb.net/")

// const User = mongoose.model('Users',{name: String,
//     email: String,
//     password:String});

// const user = new User({name: 'Harshit Gautam',
//     email: 'thegautamharshit@gmail.com',
//     password:'123456'});
// user.save()

//---------------------------------------------------------------------------------

// const express = require("express");
// const app  = express();
// const mongoose = require('mongoose');
// app.use(express.json())
// mongoose.connect("mongodb+srv://thegautamharshit:iwtomyMDB21@cluster0.i3871.mongodb.net/")
//     .then(()=>{console.log("Connected to MongoDB")})
//     .catch(err=> console.error("MongoDB Connection Error", err));

// const User = mongoose.model('Users',{
//     name: String,
//     email: String,
//     password:String});

// app.post("/signup", async (req, res)=>{
//     try{
//         const username = req.body.username;
//         const password = req.body.password;
//         const name = req.body.name;
    
//         const existingUser = await User.findOne({email: username});
//         if (existingUser){
//             return res.status(400).send("Username already exists");
//         }
//         const user = new User({
//             name: name,
//             email: email,
//             password: password
//         });
        
//         await user.save();
        
//         res.json({
//             msg : "User created Successfully"
//         });
//     } catch(error){
//         console.log("Error during signup", error);
//         res.status(500).send("Internal Server Error");
//     }
        
// });

//=========================================================================

const jwt = require("jsonwebtoken")

const value = {
    name: "Harshit",
    id: 1882
}

const token = jwt.sign(value, "secret");
console.log(token);

