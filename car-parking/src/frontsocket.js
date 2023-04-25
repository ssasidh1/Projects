import {WebSocket} from 'ws';
const client=new WebSocket("wss://33s3m4lfd9.execute-api.us-west-1.amazonaws.com/production")
client.on("message",(event)=>alert(event))
