import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom";

function Entercode(){
    const inputref=useRef(null);
    const navigate=useNavigate();
  async  function submitfn(){
        const id=inputref.current.value;
        if(!id){
            alert("Please Enter a valid room id");

        }
        const res= await fetch("http://localhost:5000/joinroom",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({roomid:id})

        })
        if(res.ok){
            navigate(`/Chat1/${id}`)
        }
    }
    
  



    return(
        <div className="h-screen bg-black">
            <div className="h-[10%] w-[40vw]  bg-white  flex m-auto rounded-md">
                <input ref={inputref} className="w-full text-center text-black  h-full" type="text" placeholder="Enter Room id " />
                <button 
                onClick={submitfn}
                 className="bg-green-700 w-[10vw] text-white rounded-md p-1">Join Room </button>
            </div>


        </div>
    )
}
export default Entercode