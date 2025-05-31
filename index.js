/*

const{ WebSocket, WebSocketServer }= require( "ws");
const wss=new WebSocketServer({port:8080})
wss.on("connection",(function(socket){
    console.log("Client connected");
    // setInterval(()=>{
    //     socket.send("hello saurav")
    // },500)
    socket.on("message",function(e){
        if(e.toString()==="ping")
        {
            socket.send("pong")
        }
    })
}))
    */

const { WebSocket, WebSocketServer } =require('ws');
const wss=new WebSocketServer({port:8080});
let count=0;

let allsocket=[];
wss.on("connection",(socket)=>{

    console.log("user connected #",count+1);
    count=count+1;
    
    socket.on("message",(message)=>{
        console.log("message recieved from the user",message.toString());
        const parsedmsg=JSON.parse(message);
       if(parsedmsg.type==='join'){
        allsocket.push({
            socket,
            room:parsedmsg.payload.roomid
        })
        
       }
       console.log("user is joined with user id ",parsedmsg.payload.roomid);
       if(parsedmsg.type==='chat'){
       const sender=allsocket.find(u=>u.socket==socket);
       const msg=parsedmsg.payload.message;
       const senderroom=parsedmsg.payload.roomid;
       if(!sender)return ;
       const selecteduser=allsocket.filter(x=>x.room===senderroom&&x.socket!=socket);
       selecteduser.forEach((u)=>{
        u.socket.send("server:"+msg)
       })


       
       
       }

    })
})