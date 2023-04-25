import React, { useState } from 'react';
import './App.css';
import Header from './header';
import Footer from './footer';
import BImage from './binghamtonImage';
import ParkingL from './parking_layout';

import ParkingF from './Parking';
import {totalLots,condition} from './config'
function App() {
  return (
   <div className='appContainers'>
    
    <BImage />
    
    <Header />
    
    <div className='body' >
     
    {Parkinglots()}
    
     </div>
     
    <Footer />
  
   </div>
  );
}
function Parkinglots(){
         
  return Array(totalLots).fill(1).map((val,id)=><ParkingF state={condition[id]} key={id} />)
}
export default App;
