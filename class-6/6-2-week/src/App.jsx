// import { useState } from 'react'
// import './App.css'
// import axios from "axios";
// import { useEffect } from 'react';

// function App() {
//   const [todos, setTodos] = useState([]);

//   useEffect(()=>{
//     axios.get("https://jsonplaceholder.typicode.com/todos/")
//     .then(function(response){
//       console.log("API Response", response.data);
//       setTodos(response.data);
//     })
//     .catch(function(error){
//       console.error("Error Fetching todos:", error)
//     });
//   }, []);

//   return (
//   <>
//     {todos.map(todo => <Todo id={todo.id} title={todo.title} completed={todo.completed}/>)}
//   </>
//   )
// }

// function Todo({title,completed, id}){
//   const buttonText = completed ? "Completed" : "Mark as Done";
//   const buttonStyle = {
//     backgroundColor: completed? "green" : "red",
//     color: "white",
//     padding: "10px 20px",
//     borderRadius: "5px",
//     curson: "pointer"
//   }

//   return (
//     <div>
//     <h1>{title}</h1>
//     <h1>{id}</h1>
//     <button style={buttonStyle}>{buttonText}</button>
//   </div>

//   ) 
// }

// export default App

//-------------------------------------------------------------

import axios from "axios"
import { use } from "react";
import { useState, useEffect } from "react";
import { set } from "zod";

function App(){
  const [selectedId, setSelectedId] = useState(1);

  return <div>
    <button onClick={()=>{setSelectedId(Math.floor(Math.random() * 200) + 1);}}>Random ID</button>
    <button onClick={function(){
      setSelectedId(1);
    }}>1</button>
    <button onClick={function(){
      setSelectedId(2);
    }}>2</button>
    <button onClick={function(){
      setSelectedId(3);
    }}>3</button>
    <button onClick={function(){
      setSelectedId(4);
    }}>4</button>
    
    <Todo id={selectedId}/>
  </div>
};

function Todo({id}){
  const [todo, setTodo] = useState({});

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/todos/"+ id)
      .then(response=>{
        setTodo(response.data)
      })
  },[id]);

  return <div>
    Id:{id}
    <h1>{todo.title}</h1>
    <h1>{todo.id}</h1>
  </div>
}

export default App;