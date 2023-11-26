const express = require("express")
require("dotenv").config();
const app = express();

app.use(express.static(__dirname + "/public"))
app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/public/index.html")
})


const PORT = process.env.PORT || 8010
const server = app.listen(PORT, ()=>{
    console.log("listening on...", PORT);
})

const io = require('socket.io')(server);

io.on("connection",(socket)=>{
    console.log("connected...")
    socket.on("send_message",(msg)=>{
        socket.broadcast.emit("receive_message", msg);
    })
})