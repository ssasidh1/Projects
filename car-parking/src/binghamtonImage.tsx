import React from 'react';
import './App.css';
import binghamtonLogo from './lib/BinghamtonLogo.png'
function BImage(){
    return(
    <div className="image">
        <img className="bimage" src={binghamtonLogo} alt="Binghamton university" ></img>
    </div>
    );
}
export default BImage;