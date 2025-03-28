const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");
// Middleware for handling auth
function userMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];
    try {
        const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
        if(decodedValue.username){
            req.username = decodedValue.username;
            next();
        }else{
            res.status(403).json({
                msg: "You are not Authenticated"
            })
        }
    } catch (e){
        res.json({
            message: "Incorrect Inputs"
        })
    }
}

module.exports = userMiddleware;