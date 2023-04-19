import React from 'react';
import './App.css';
import Header from './header';
import Footer from './footer';
import BImage from './binghamtonImage';
import ParkingL from './parking_layout';
import ParkingF from './Parking';
function App() {
  return (
   <div className='appContainers'>
    <BImage />
    <Header />
    <Footer />
    <ParkingF />
   </div>
  );
}

export default App;
