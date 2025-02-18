import { useState } from 'react'
import './App.css'

// function App() {
//   const [title, setTitle] = useState("I choose 10");

//   function updateTitle(){
//     setTitle("I choose "+ Math.random());
//   }

//   return <>
//     <button onClick={updateTitle}>Update the title</button>
//     <Header title={title}></Header>
//     <Header title="Gautam"></Header>
//   </>

// }

// function Header({title}){
//   return <div>
//     {title}
//   </div>
// }

// export default App

//-----------------------------------------------------------------

// function App() {

//   return <>
//     <HeaderWithButton/>
//     <Header title="Harshit"></Header>
//     <Header title="Gautam"></Header>

//   </>

// }

// function HeaderWithButton(){
//   const [title, setTitle] = useState("I choose 10");

//   function updateTitle(){
//     setTitle("I choose "+ Math.random());
//   }

//   return <div>
//     <button onClick={updateTitle}>Update the title</button>
//     <Header title={title}></Header>
//   </div>
// }
// function Header({title}){
//   return <div>
//     {title}
//   </div>
// }

// export default App


//----------------------------------------------------------------

// import { memo } from 'react'
// function App() {
//   const [title, setTitle] = useState("I choose 10");

//   function updateTitle() {
//     setTitle("I choose " + Math.random());
//   }

//   return <div>
//     <button onClick={updateTitle}>Update the title</button>
//     <Header title={title}></Header>
//     <br />
//     <Header title="Harshit"></Header>
//     <Header title="Gautam"></Header>
//   </div>

// }

// const Header = memo(function ({ title }) {
//   return <div>
//     {title}
//   </div>
// });

// export default App

//--------------------------------------------------------------------------
let counter = 4;

function App(){
  const [todos, setTodos] = useState([{
    id:1,
    title: "Go to Gym",
    description: "Will go to the gym in the morning"
  },{
    id:2,
    title: "Complete DSA",
    description: "Solver DSA questions"
  },{
    id:3,
    title: "Practice MERN",
    description: "watch tutorial and code together"
  }])

  function addTodo(){
    setTodos([...todos,{
      id:counter++,
      title:Math.random(),
      description: Math.random()
    }])

    // const newTodos = [];
    // for(let i=0; i<todo.length; i++){
    //   newTodos.push(todos[[i]]);
    // }
    // newTodos.push({
    //   id:4,
    //   title:Math.random(),
    //   description: Math.random()
    // })
    // setTodos(newTodos)
  }

  return (
    <div>
      <button onClick={addTodo}>Add a Todo</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </div>
  )
}

function Todo({title, description}){
  return <div>
    <h1>{title}</h1>
    <h5>{description}</h5>
  </div>
}

export default App