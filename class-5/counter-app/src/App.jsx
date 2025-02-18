import './App.css'
import { useState } from 'react';

function App(){
  const [todos, setTodos] = useState([{
    id: 1,
    title: "Wake UP",
    description: "Wake up early in the morning",
    completed: true,
  },
  {
    id: 2,
    title: "Jogging",
    description: "Go for jogging in the morning",
    completed: false,
  },
  {
    id: 3,
    title: "Development",
    description: "Learn MERN development",
    completed: true,
  },
]);

  return(
    <div>
      {/* {JSON.stringify(todos)} */}
      {/* <Todo title= {todos[0].title} description={todos[0].description}></Todo> */}
      {todos.map(function(todo){
        return <><Todo title={todo.title} description={todo.description}></Todo>
        <button onClick={toggeCompleted}>
          {todo.completed ? "Mark Incomplete " : "Mark Completed"}
        </button></>
      })}
    </div>
  )
}

function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
    {/* <button>{props.completed}</button> */}
  </div>
}

const toggeCompleted = (id) => {
  setTodos(
    todos.map((todo)=> todo.id === id ? {...todo, completed: !todo.completed} : todo)
  )
}

export default App
