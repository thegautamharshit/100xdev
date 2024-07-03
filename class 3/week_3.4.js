const express = require("express");
const app = express();

function isOldEnough(age){
    if(age>=14){
        return true;
    }else{
        return false;
    }
}


function isOldEnoughMiddleware(req,res,next){
    const age = req.query.age;

    if(age>=14){
        next();
    }
    else{
        res.status(410).json({
            msg: "Grwo up kido"
        })
    }
}

app.get("/ride1", function(req,res){
    if(isOldEnough(req.query.age)){
        res.json({
            msg: "Ride number one completed"
        })
    }else{
        res.status(410).json({
            msg: "Grow Up Kid"
        })
    }
})


app.use(isOldEnoughMiddleware)
//or we can use app.use(functionName); to call middleware but it will only work for the below methods

app.get("/ride2", /*isOldEnoughMiddleware,*/ function(req,res){
    res.json({
        msg: "Ride number two completed"
    });
});


app.listen(3000);
