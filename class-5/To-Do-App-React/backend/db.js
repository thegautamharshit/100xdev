const mongoose = require("mongoose");
const { string, boolean } = require("zod");

mongoose.connect("mongodb+srv://thegautamharshit:iwtomyMDB21@cluster0.i3871.mongodb.net/to-do-app")
    .then(()=> console.log("Connected to MongoDB"))
    .catch(err=> console.error("Error Connecting to MongoDB: ", err));

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false
    }
})
    
const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todos: todo
}