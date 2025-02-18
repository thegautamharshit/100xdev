export function Todos({todos}){
    const markAsCompleted = async (id)=>{
        try{
            await fetch("http://localhost:3000/completed",{
                method: "PUT",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({id}),
            });

            alert("Todo marked as completed")
        }catch(error){
            console.error("Error making todo as completd:", error);
            alert("Failed to mark todo as completed");
        }
    }
    return <div>
        {todos.map(function(todo){
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button style={{
                            padding: 10,
                            margin: 10,
                            backgroundColor: todo.completed ? "green" : "blue",
                            color: "white",
                            cursor: "pointer",
                        }} onClick={()=> markAsCompleted(todo._id)} disabled={todo.completed}>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
            </div>
        })}
    </div>
}