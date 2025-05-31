import { useNavigate } from "react-router-dom"

function Home(){
    const navigate=useNavigate();
    return (
        <div className="h-screen bg-black ">
            <div className="flex flex-col h-[80vh] w-[50vw] bg-white m-auto items-center gap-4 justify-center">
              <div className="bg-yellow-800 h-[10%] w-[30%] rounded-md flex  flex-col ">
               <button
               onClick={()=>navigate('/createnewroom')}
                className="w-full h-full text-center">Create new Room </button>
              
                </div> 
                <div className="bg-yellow-800 h-[10%] w-[30%] rounded-md flex  flex-col ">
               <button 
               onClick={()=>navigate('/entercode')}
               className="w-full h-full text-center">Join Room </button>
              
                </div> 
           
            </div>

        </div>
    )
}
export default Home