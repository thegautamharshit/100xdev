const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todos } = require("./db");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(express.json());
app.use(cors({}));

app.post("/todo", async (req,res)=>{
    const createPayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayLoad);
    if (!parsedPayLoad.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    await todos.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
        completed: false
    })
    res.json({
        msg: "To Do Created."
    })
})

app.get("/todos", async (req,res)=>{
    const allTodos = await todos.find({});
    res.json({
        todos: allTodos
    })
})

app.put("/completed",async (req,res)=>{
    const updatePayLoad = req.body;
    const parsedPayLoad = updateTodo.safeParse(updatePayLoad);
    if(!parsedPayLoad.success){
        res.status(411).json({
            msg: "You send the wrong inputs"
        });
        return;
    }
    try{
        await todos.findByIdAndUpdate(req.body.id,{
            completed: true
        });
        res.json({
            msg: "Todo marked as completed"
        });

    }catch(error){
        console.error("Error updating todo:", error);
        res.status(500).json({
            msg: "Internal Server Error"
        });
    }
})

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
});