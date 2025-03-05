// import React, { useState } from 'react'
// import './App.css'

// function App() {

//   return (
//     <>
//       <MyComponent/>
//     </>
//   )
// }

// export default App


// // function MyComponent(){
// //   const [count, setCount] = useState(0);

// //   const incrementCount = ()=>{
// //     setCount(count + 1);
// //   }
  
// //   return (<div>
// //     <p>{count}</p>
// //     <button onClick={incrementCount} > Increment</button>
// //   </div>
// //   );
// // }

// // export default MyComponent

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   }

//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     );
//   }
// }

//==============================LIFE CYCLE==========================================


// import React, { useEffect, useState } from 'react'
// import './App.css'

// function App() {
//   const [render, setRender] = useState(true);

//   useEffect(() => {
//     setInterval(() => {
//       setRender(r => !r);
//     }, 5000)
//   }, []);

//   return (
//     <>
//       {render ? <MyComponent /> : <div></div>}
//     </>
//   )
// }


// function MyComponent() {
//   useEffect(() => {
//     console.error("component mounted");

//     return () => {
//       console.log("component unmounted");
//     };
//   }, []);

//   return <div>
//     From inside my component
//   </div>
// }

// export default App

// ----------------------------CUSTOM USE HOOKS------------------------------

// import { useEffect, useState } from "react";
// import axios from "axios"
// import './App.css'

// function useTodos(n){
//   const [todos, setTodos] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(()=>{
//     const value = setInterval (()=>{
//       axios.get("https://dummyjson.com/todos")
//         .then(res => {
//         setTodos(res.data.todos)
//         setLoading(false);
//       })
//     },n * 1000)

//     axios.get("https://dummyjson.com/todos")
//         .then(res => {
//         setTodos(res.data.todos)
//         setLoading(false);
//       })

//     return () =>{
//       clearInterval(value);
//     }
//   },[n])

//   return {todos, loading};
// }

// function App(){
//   const {todos, loading} = useTodos(5);
  
//   if(loading){
//     return (
//       <div>Loading...</div>
//     )
//   }

//   return (
//     <>
//       <div><h1>To Do List</h1></div>
//       {todos.map(todo => (
//         <Track key={todo.id} todo={todo} />
//         ))}
//     </>
//   )
// }

// function Track({ todo }) {
//   return (
//     <>
//       <h2 style={{color: todo.completed ? "green" : "red"}}>{todo.id} - {todo.todo}</h2> 
//       <h4>ID :{todo.userId} ({todo.completed ? "Completed" : "Not Completed"})</h4>
//       <br/>
//     </>
//   );
// }

// export default App


// =============================USER IS ONLINE=================================


// import axios from "axios"
// import './App.css'
// import { useIsOnline } from "./hooks/useIsOnline"; // importing from hook folder

// function App(){
//   const isOnline = useIsOnline();

//   return (
//     <>
//       {isOnline ? "Online": "Offline"}
//     </>
//   )
// }

// export default App

//-----------------useInterval ----------------------

// import { useEffect, useState } from "react";

// function useInterval(fn, timeout) {

//   useEffect (()=>{
//     const x = setInterval(()=>{
//       fn()
//     },timeout);

//     //we can use other ways to write this 
//     // const x = setInterval(fn, timeout);

//     return ()=>{
//       clearInterval(x)
//     }
//   },[])
// }

// function App(){
//   const [count, setCount] = useState(0);
  
//   useInterval(()=> {
//     setCount(c => c + 1);
//   }, 1000)

//   return (
//     <>
//       Timer is at {count}
//     </>
//   )
// }

// export default App

//-------------------------------useDebounce----------------------------

import React, {useState,useEffect, useDebugValue} from 'react';

function useDebounce(value,delay){
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(()=>{
    let time_out = setTimeout(()=>{
      setDebouncedValue(value)
    }, delay)

    return ()=>{
      clearTimeout(time_out)
    }
  }, [value])

  return debouncedValue
 
}

const SearchBar = () =>{
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500);

  return (
    <>
      <>
      Debounce Value is {debouncedValue}
      <br />
      </>
      < input type="text" value={inputValue} 
      onChange={(e)=>setInputValue(e.target.value)}
      placeholder = "Search..."
      />
    </>
  );
};

export default SearchBar;