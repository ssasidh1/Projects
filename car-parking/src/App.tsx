import React from 'react';
import './App.css';
import Header from './header';
import Footer from './footer';
import BImage from './binghamtonImage';
function App() {
  return (
   <div className='appContainers'>
    <BImage />
    <Header />
    <Footer />

   </div>
  );
}

export default App;
