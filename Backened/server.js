const express=require('express')
const cors=require('cors')

const app=express()
app.use(cors())
app.use(express.json())
const room=[];

app.post('/createroom',(req,res)=>{
    const roomid=req.body.roomid;
    if(room.includes(roomid)) return res.status(400).send('room already exists');
    room.push(roomid);
    res.status(201).send('room created');
    
})

app.post('/joinroom',(req,res)=>{
    const {roomid}=req.body;
    if(room.includes(roomid)){
        res.status(200).send('joined room');

    }
    else {
        res.status(400).send("Incorrect Room id ")
    }
})
app.listen(5000,()=>{
    console.log("server is running on port")
})