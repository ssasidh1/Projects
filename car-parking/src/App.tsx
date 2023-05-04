import './App.css';
import Header from './header';
import Footer from './footer';
import BImage from './binghamtonImage';
import ParkingL from './parking_layout';

import ParkingF from './Parking';
import {totalLots,condition} from './config'
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


import { useState,useEffect } from 'react';
// import  { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb"
// import { ddbClient,credify} from "./config";
// import {run} from "./aws/get"
import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb"
import { ddbClient, credify } from "./config.js";
// Set the parameters
import {condition as cond } from './config'
Amplify.configure(awsconfig);
function App({signOut}:any) {

  
      const t:{[key:string]:string[]}={};
       const [condition,setCondition]=useState(t)
       useEffect(()=>{
        const prom=fetch('https://qrgc4tmah0.execute-api.us-east-1.amazonaws.com/prod').then(async (data)=>await data.json());
        prom.then((val)=>{
          console.log(JSON.parse(val.body))
          const data=JSON.parse(val.body);
          const obj:any={};
          console.log("data----",data)
          Object.values(data).forEach((val:any,id)=>{
            obj[val.lotId]=val.status;
          })
          console.log(obj);
          setCondition(obj)
        })
        
        const client=new WebSocket("wss://13n38cpnrg.execute-api.us-west-1.amazonaws.com/Prod")
        client.addEventListener("message",(event)=>{
          
          const data=JSON.parse(event.data);
          //console.log(data)
          for(let rec of data.Records){
            const lotId:string=rec.dynamodb.NewImage.lotId.S
            const status=rec.dynamodb.NewImage.status.L
            const arr=status.map((obj:any)=>obj.S)
            
            const conds={...condition}
            console.log(lotId,conds,"\n------\n",condition,"\n*****\n")
            conds[lotId]=arr;
            console.log(conds)
            setCondition((condition)=>{return {...condition,[lotId]:arr}})
            
          }
        }) 
      
        //-------------
        // ddb.scan({TableName:'CAR'},(err:any,data:any)=>{
        //   data.Items.map((row:any,id:any)=>{
        //     // /console.log("Row\n",row)
        //     //console.log("sattus array",(row.status.L))
        //      condition[row.lotId.S]=row.status.L.map((val:any)=>val.S)
        //      console.log("inside ",condition)
        //      setCondition({...condition})
        //   })
          //console.log(data.Items);
  // })



        //-------------
       },[])
       console.log(" rendering app");

  return (
   <div className='appContainers'>
    
    <BImage />
    
    <Header signOut={signOut} />
    
    <div className='body' >
     
    {Parkinglots(condition)}
    
     </div>
     
   <Footer />
  
   </div>
  );
}
function Parkinglots(condition:any){
  return Object.keys(condition).map((val:string,id)=><ParkingF lotId={val} state={condition[val]} key={id} />)     
  //return Array(totalLots).fill(1).map((val,id)=><ParkingF state={condition[id]} key={id} />)
}
export default withAuthenticator(App);
