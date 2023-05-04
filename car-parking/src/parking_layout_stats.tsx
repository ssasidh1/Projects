import './App.css'
import { Amplify, Auth } from 'aws-amplify';
export default function ParkingS(){
 function getUser():any{
    Auth.currentAuthenticatedUser().then((user)=>{
        const email=(user.attributes.email);console.log(email);
        return fetch('https://fe8us6zfr1.execute-api.us-west-1.amazonaws.com/stage1',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000',
            
              },
            body: JSON.stringify({email})
        });
    }).then(res =>{
            if(res.ok){
                return res.json();
            }
            else{
                throw new Error('Network response was not ok.');
            }
          })
          .then(data => {
            console.log(data);
          })
          .catch(error => {
            console.error('There was an error!', error);
          });

   
}
    return(
        // <div className = "box">
            <div className='stats'>
                <br></br>
                <div className='s'>&nbsp;&nbsp;&nbsp;&nbsp;Avg time for vacancy:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Available Slots:</div>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;Used Slots: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In queue:</p>
                <button className='bt' onClick={getUser}>notify me</button>
            </div>
        // </div>
    )
}