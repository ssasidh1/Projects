import './App.css'
import carT from './lib/carE.png'
import carF from './lib/parking.png'
import { useState } from 'react';
export default function ParkingL(props:any){

    
    return(
        // <div className = "box">
            <div className='parking1'>
            <center>
            {ParkingIconGenerator(props.state)}
            </center>
            </div>
        // </div>
        
    );
}


function ParkingIconGenerator(arr:any){

    const client=new WebSocket("wss://13n38cpnrg.execute-api.us-west-1.amazonaws.com/Prod")
    client.addEventListener("message",(event)=>console.log(JSON.parse(event.data)))

 
    
   let ret=arr.map((i:string,id:number) => {
            console.log("here");
            return <img  id={`${id}`} onClick={book} src={i==='used'?carT:carF} key={id} className='car' ></img>
        });
        
        console.log(ret);
        function book(event:any){
            let el=event.target;
            let elId=el.getAttribute("id");
            console.log(el.src.split("3000")[1])
            if (arr[elId])alert(" occupied")
            else {
                console.log(carT,carF)
                console.log(el.src===carF)
                if(el.src.split("3000")[1]===carT)el.src=carF
                else el.src=carT
                //alert(el.src)
            }
        }
        return ret;
    
    
}