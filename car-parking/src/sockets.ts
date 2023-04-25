import {WebSocketServer} from 'ws'
const wsoc=new WebSocketServer({port:8888});
wsoc.on("listening",()=>console.log("listening....."))
wsoc.on("connection",(soc)=>{
    
    console.log("got the connection")
    let jsun={
        name:"akash",
        age:21
    }
    soc.send(JSON.stringify(jsun))
    soc.send("hello")
    soc.on("message",(event)=>{
         soc.send(event);
    })
})