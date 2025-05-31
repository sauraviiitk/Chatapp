import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom";

function Chat1() {
    const[message,setmessage]=useState([]);
    const inputref=useRef(null);
    const socketref=useRef(null);
    
    //const roomid="room1";
    const {roomid}=useParams();
    function submitfn(){
        const newmsg=inputref.current.value;
        socketref.current.send(JSON.stringify({
            type:"chat",
            payload:{
                message:newmsg,
                roomid
            }
        }))
        setmessage((prev)=>[...prev,{text:newmsg,type:"sent"}])
        inputref.current.value=""
    }
    useEffect(()=>{
        socketref.current=new WebSocket("ws://localhost:8080/");
        socketref.current.onopen=()=>{
            const joinmsg={
                type:"join",
                payload:{
                    roomid
                },
            }
            socketref.current.send(JSON.stringify(joinmsg));


        }

        
        
        socketref.current.onmessage=(event)=>{
            setmessage((prev)=>[...prev,{text:event.data,type:"received"}])
            
        }
        return()=>{
            socketref.current.close();
        }
    },[roomid])
    return (

        <div className="w-[70vw] h-[85vh]  text-black bg-white rounded-md m-auto ">
            <h1 className="font-bold text-2xl text-center">Chat Application</h1>
            <div className="h-[85%] bg-blue-500">

        {message.map((msg,index)=>{
           return (
            <div
            key={index}
            className={`text-white break-words max-w-[60%] rounded-md text-left m-1 text-xl p-2 ${ msg.type === "sent"? "bg-green-700 ml-auto text-right": "bg-red-700 mr-auto" }`}>           
                 {msg.text}
            </div>
           )

        })}

            </div>
            <div>
                <input ref={inputref} type="text" placeholder="Start Conversation..." className="border-2 mt-4 mx-4 p-1 rounded-md  border-black w-[85%] text-center" />
                <button
                onClick={submitfn}
                 className="bg-green-600 text-white font-bold p-2 rounded-md">Submit</button>
            </div>
        </div>


    )
}
export default Chat1