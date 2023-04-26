import './App.css';
import Header from './header';
import Footer from './footer';
import BImage from './binghamtonImage';
import ParkingL from './parking_layout';

import ParkingF from './Parking';
import { useState,useEffect } from 'react';
import {totalLots,condition as cond}  from './config'
// import  { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb"
// import { ddbClient,credify} from "./config";
// import {run} from "./aws/get"
import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb"
import { ddbClient, credify } from "./config.js";
// Set the parameters


function App() {
  const cond:{[key:string]:string[]}={};
      const aws=require('aws-sdk')
      const ddb=new aws.DynamoDB({
        region:'us-west-1',
        accessKeyId:"AKIA3DC6ILKDZTWY7KPF",
        secretAccessKey:"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"
      })        
   
      console.log(cond)
       
       const [condition,setCondition]=useState(cond)
       useEffect(()=>{
       
        const client=new WebSocket("wss://13n38cpnrg.execute-api.us-west-1.amazonaws.com/Prod")
        client.addEventListener("message",(event)=>{
         
          const data=JSON.parse(event.data);
          //console.log(data)
          for(let rec of data.Records){
            const lotId:any=rec.dynamodb.NewImage.lotId.S
            const status=rec.dynamodb.NewImage.status.L
            const arr=status.map((obj:any)=>obj.S)
            console.log(lotId)
            cond[lotId]=arr;
            setCondition({...cond})
            
          }
        })
      
        //-------------
        ddb.scan({TableName:'CAR'},(err:any,data:any)=>{
          data.Items.map((row:any,id:any)=>{
           console.log("inside")
            condition[row.lotId.S]=row.status.L.map((val:any)=>val.S)
            setCondition({...condition})
          })
  })



        //-------------
       },[])
  return (
   <div className='appContainers'>
    
    <BImage />
    
    <Header />
    
    <div className='body' >
     
    {Parkinglots(condition)}
    
     </div>
     
    <Footer />
  
   </div>
  );
}
function Parkinglots(condition:any){
  return Object.keys(condition).map((val:string,id)=><ParkingF state={condition[val]} key={id} />)     
  //return Array(totalLots).fill(1).map((val,id)=><ParkingF state={condition[id]} key={id} />)
}
export default App;
