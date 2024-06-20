## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 


Reading the data.

const fs = require("fs");

fs.readFile("sample.txt","utf-8",function(err,data){
    console.log(data);
});


Writting and then Reading that data.

const fs = require('fs');
let fInput = "This is from File called Sample.txt and i am currently trying to upate that using fs.writeFile."
fs.writeFile("sample.txt",fInput,function(err){
    if(err)throw err;
    else{
        console.log("File is updated");
    }
});

fs.readFile("sample.txt","utf-8",(err,data)=>{
    console.log(data);
})