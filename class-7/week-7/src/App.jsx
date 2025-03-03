// import './App.css'

// import React, { Suspense } from 'react'
// import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
// // import Landing from '../components/Landing'
// // import Dashboard from '../components/Dashboard'
// const Dashboard = React.lazy(() => import('../components/Dashboard'))
// const Landing = React.lazy(() => import('../components/Landing'))
// const { defaultAllowedOrigins } = require("vite")


// function App() {

//   return (
//     <>
//       <BrowserRouter>
//         <AppBar />
//         <Routes>
//           <Route path="/" element={<Suspense fallback={"Loading..."}><Landing /></Suspense>} />
//           <Route path="/dashboard" element={<Suspense fallback={"Loading..."}><Dashboard /></Suspense>} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// const AppBar = React.memo(()=>{
//   const navigate = useNavigate();

//   const goToDashboard = React.useCallback(()=> navigate ('/dashboard'),[navigate]);
//   const goToLanding = React.useCallback(()=> navigate ('/'),[navigate]);

//   return <>
//     <StaticHeader />
//     <button onClick={()=>{
//       // window.location.href = '/dashboard'
//       // navigate('/dashboard')
//       goToDashboard()
//     }}><h3>Dashboard</h3></button>

//     <button onClick={()=>{
//       // window.location.href = '/'
//       // navigate('/')
//       goToLanding()
//     }}><h3>Landing</h3></button>
//   </>
// });

// const StaticHeader = React.memo(()=>{
//   return <h1 style={
//     {background: "green",position:'fixed',top:0,left:0,right:0}
//     }>This is Top Bar</h1>
// })

// export default App

//-----------------------------------------------------------------------------------------


// import React, { useContext, useState } from 'react'
// import { CountContext } from '../components/context';
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <CountContext.Provider value={count}>
//         <Count count={count} setCount={setCount} /> 
//       </CountContext.Provider>
//     </div>
//   )
// }

// function Count({setCount}){
//   return <div>
//     <CountRender />
//     <Button setCount={setCount} />
//   </div>
// }

// function CountRender(){
//   const count = useContext(CountContext);
//   return <div>
//     <h1>Count: {count}</h1>
//   </div>
// }

// function Button({setCount}){
//   const count = useContext(CountContext);
//   return <div>
//     <button onClick={()=>{
//       setCount(count+1)
//     }}>Increase</button>

//     <button onClick={()=>{
//       setCount(count-1)
//     }}>Decrease</button>
//   </div>
// }

// export default App;


//--------------------------------------------------------------------------
//============-------------npm install react@18 react-dom@18 --------------


// import './App.css'
// import React from 'react';
// import { useMemo } from 'react';
// import { RecoilRoot, useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
// import { countAtom, evenSelector } from '../store/atoms/count';

// function App() {
//   return (
//     <div>
//       <RecoilRoot>
//         <Count />
//       </RecoilRoot>
//     </div>
//   )
// }

// function Count(){
//   return <div>
//     <CountRender />
//     <Button />
//   </div>
// }

// function CountRender(){
//   const count = useRecoilValue(countAtom);
//   return <div>
//     <h1>Count: {count}</h1>
//     <EveOdd />
//     <EvenCountRendered />
//   </div>
// }

// function EveOdd(){
//   const count = useRecoilValue(countAtom);
//   const isEven = useMemo(()=> {
//     return count%2===0
//   },[count])

//   return <div>
//     <h1>{isEven ? "It is Even" : "It is Odd"}</h1>
//   </div>
// }

// function EvenCountRendered(){
//   const eve = useRecoilValue(evenSelector);

//   return <div>
//     <div
//       style={{
//         width: '50px',         // Width of the circle
//         height: '50px',        // Height of the circle
//         backgroundColor: eve ? "green" : "red", // Color based on even/odd
//         borderRadius: '50%',   // Makes the div circular
//         margin: '20px auto',   // Centers the circle horizontally
//       }}
//     ></div>    
//   </div>
// }

// function Button(){
//   // const [count, setCount] = useRecoilState(countAtom);
//   const setCount = useSetRecoilState(countAtom); // This will stop the re-rendering of the button component
//   return <div>
//     <button onClick={()=>{
//       setCount(count=>count-1)
//     }}>Decrease</button>

//     <button onClick={()=>{
//       setCount(count=>count+1)
//     }}>Increase</button>

//   </div>
// }

// export default App;

//----------------------TO DO APP--------------------------

import './App.css';
import React from 'react';
import { RecoilRoot } from 'recoil';
import TodoList from '../components/TodoList'; // Adjust the path as needed

function App() {
  return (
    <RecoilRoot>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Todo List</h1>
        <TodoList />
      </div>
    </RecoilRoot>
  );
}

export default App;