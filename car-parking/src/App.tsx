import React, { useState } from 'react';
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
Amplify.configure(awsconfig);
function App({signOut}:any) {
  let email:any;
  Auth.currentAuthenticatedUser().then((user)=>{email=(user.attributes.email);console.log(email)});
  
  return (
   <div className='appContainers'>
    
    <BImage />
    
    <Header signOut={signOut} />
    
    <div className='body' >
     
    {Parkinglots()}
    
     </div>
     
    <Footer />
  
   </div>
  );
}
function Parkinglots(){
         
  return Array(totalLots).fill(1).map((val,id)=><ParkingF name={id} state={condition[id]} key={id} />)
}
export default withAuthenticator(App);
