import React from 'react';
import './App.css';
import Header from './header';
import Footer from './footer';
import BImage from './binghamtonImage';
import ParkingL from './parking_layout';
import ParkingF from './Parking';
let pspaces=5;
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

  return Array(pspaces).fill(1).map((val,id)=><ParkingF key={id} />)
}
export default App;
