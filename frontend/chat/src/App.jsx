// import { useEffect, useRef, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Chat from "./Chat";
import Chat1 from "./Chat1";


// function App() {
//   const[socket,setsocket]=useState();

// const inputref=useRef(null);


// useEffect(()=>{
//   const ws=new WebSocket("ws://localhost:8080");
//   setsocket(ws);
//   ws.onmessage=(env)=>{
//     alert(env.data)
//   }
  
// },[])

// function sendmessage(){
//   const message=inputref.current.value;
//   socket.send(message)
// }
//   return (
//     <>
//     <input ref={inputref} type="text" placeholder='Start messaging ' />
//     <button onClick={sendmessage}>Send</button>
//     </>
//   )
// }

// export default App
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from "./Home";
import Createnewroom from "./Createroom";
import Entercode from "./Entercode";

function App(){
return (
 <div className="h-screen bg-black text-white">
  <Router>
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route path="/createnewroom" element={<Createnewroom/>}/>
      <Route path="/entercode" element={<Entercode/>}/>
      <Route path="/Chat1/:roomid" element={<Chat1/>}/>
    </Routes>
  </Router>
 </div>
)
}
export default App;