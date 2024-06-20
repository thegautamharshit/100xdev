const express = require('express');
const bodyParser = require('body-parser');//npm install body-parser
const app = express();
const port =3000

app.use(bodyParser.json()); //configure body parser by calling use() method

app.get('/',(req,res)=>{
    res.send("Hello World!")
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})

app.post('/conversations',(req,res)=>{
    console.log(req.headers)
    console.log(req.body);
    res.send('<b>Harshit Gautam</b>')
})



//npm in
//npx nodemon filename.js           used to automatically refresh the server



