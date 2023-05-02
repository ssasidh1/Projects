const client=new WebSocket("wss://13n38cpnrg.execute-api.us-west-1.amazonaws.com/Prod")
client.addEventListener("message",(event)=>console.log(JSON.parse(event.data)))