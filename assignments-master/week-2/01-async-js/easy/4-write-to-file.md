## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.




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