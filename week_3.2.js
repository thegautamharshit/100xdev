// const express = require("express");
// const jwt = require("jsonwebtoken");
// const jwtPassword = "123456";

// const app = express();
// app.use(express.json()); // Call express.json() as a function

// const ALL_USERS = [
//   {
//     username: "harshit@gmail.com",
//     password: "12345",
//     name: "Harshit Gautam",
//   },
//   {
//     username: "mahima@gmail.com",
//     password: "123321",
//     name: "Mahima Rajput",
//   },
//   {
//     username: "hardik@gmail.com",
//     password: "123321",
//     name: "Hardik Jain",
//   },
// ];

// function userExists(username, password) {
//   // Write logic to return true or false if this user exists in ALL_USERS array
//   let userExists = false; // Use let instead of const
//   for (let i = 0; i < ALL_USERS.length; i++) {
//     if (ALL_USERS[i].username === username && ALL_USERS[i].password === password) {
//       userExists = true;
//       break;
//     }
//   }
//   return userExists;
// }

// app.post("/signin", function (req, res) {
//   const username = req.body.username;
//   const password = req.body.password;

//   if (!userExists(username, password)) {
//     return res.status(403).json({
//       msg: "User doesn't exist in our in-memory db",
//     });
//   }

//   var token = jwt.sign({ username: username }, jwtPassword); // Use the correct jwtPassword
//   return res.json({
//     token,
//   });
// });

// app.get("/users", function (req, res) {
//   const token = req.headers.authorization;
//   try {
//     const decoded = jwt.verify(token, jwtPassword);
//     const username = decoded.username;

//     // Return a list of users other than this username
//     const otherUsers = ALL_USERS.filter(user => user.username !== username);
//     return res.json({
//       users: otherUsers,
//     });
//   } catch (err) {
//     return res.status(403).json({
//       msg: "Invalid token",
//     });
//   }
// });

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });



// ----------------------------MONGODB-------------------------------------------------------

// const express = require("express");
// const app = express();
// app.use(express.json());

// const mongoose = require("mongoose");
// mongoose.connect("mongodb+srv://thegautamharshit:iwtomyMDB21@cluster0.qgtmuu7.mongodb.net/userappnew",{
// })
// .then(()=>{
//     console.log("Connected to MongoDB");
// })
// .catch(err => {
//     console.error("Error connecting to MongoDB", err);
// });

// const User = mongoose.model("Users",{
//     name: String,
//     email: String, 
//     password: String,
// });

// app.post("/signup",async function (req,res){
//     const username = req.body.username;
//     const password = req.body.password;
//     const name = req.body.name;

//     const existingUser = await User.findOne({email:username});
//     if(existingUser){
//         return res.status(400).send("Username already exist");
//     }

//     const user = new User({
//         name: name,
//         email: username,
//         password: password
//     });

//     //Another way of creating User
//     // await User.create({name,email:username,password});

//     await user.save()
//     .then(() => {
//         console.log("User saved successfully");
//         res.status(201).send("User Registered Successfully");
//     })
//     .catch(err => {
//         console.error("Error saving user:", err);
//         res.status(500).send("Internal Server Error");
//     });
    
// })

// app.listen(3000,()=>{
//     console.log("Server is running on port 3000")
// });





// -------------------------------------------------------------------------------------------


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


//=================== JSON WEB TOKEN ========================

// const jwt = require("jsonwebtoken");

// const value = {
//     name: "Harshit",
//     accountNumber: "242621"
// }

// const token = jwt.sign(value, "secret");
// console.log(token);


// //To verify jwt token (don't forget to add your secret text)
// const verifiedValue = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSGFyc2hpdCIsImFjY291bnROdW1iZXIiOiIyNDI2MjEiLCJpYXQiOjE3MTk1NzQzNjN9.BVcs805CkwVcX6cDAVFbgxm8cQ8ObgYPJbPEVdnTgXY","secret");
// console.log(verifiedValue)

//-----------------TRY - CATCH --------------------------------

try{
    let a;
    console.log(a.length);
}catch(e){
    console.log(`Error is ${e}`);
}

console.log("Control reached final statement");
