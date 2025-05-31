import { useEffect, useState } from "react";

function Createnewroom(){
    const [roomid,setroomid]=useState();
    const str=['qwertyuioplkjajdhfbbxLREGJREQWRYUERIOPP[P[DSKLGFJLA;VNMC.XNDLM7899656632646']
    function genrateroomid(){
        let chars=str[0];
        let temp=''
       for(let i=0;i<8;i++){
        temp+=chars.charAt(Math.floor(Math.random()*chars.length))
       }
        return temp;
    }
  

    useEffect(()=>{
       const newroomid=genrateroomid();
       setroomid(newroomid);
       fetch('https://chatapp-1-lsa7.onrender.com/createroom',{
        method:"POST",
        headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ roomid: newroomid })
       })
       .then((res)=>{
        if(!res.ok)
        {
           alert("Room alreasy exist");

        }
       })
        .catch((err) => {
        alert("Error connecting to server.");
        console.error(err);
      });
    },[])

    return(
        <div className="h-full bg-black text-center text-white text-3xl">
         
         <div>Room Create Successfully </div>
         <p>
            Your Room id is :{roomid}
         </p>
            

        </div>
    )
}
export default Createnewroom;