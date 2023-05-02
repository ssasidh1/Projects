// import React from 'react'
import './App.css'
import logo from './lib/binghamton-icon.png';
interface HeaderProps {
    signOut: () => void;
  }
function Header(props: HeaderProps) {
    const handler=(event:any)=>{
        if(event.currentTarget.id==="home")window.location.assign("https://binghamton.edu")
        if(event.currentTarget.id==="news")window.location.assign("https://www.binghamton.edu/news/home")
        if(event.currentTarget.id==="events")window.location.assign("https://www.binghamton.edu/apps/calendar/")
        if(event.currentTarget.id==="about")window.location.assign("https://www.binghamton.edu/about/")

        
        
    }
    return (
        <div className="header">
            <header className="stickyheader">
                <img src={logo} className="logo" />
                <div className="enclosure"  >
                    <a href="#" className="button" id="home" onClick={handler}>Home</a>
                    <a href="#" className="button" id="news" onClick={handler}>News</a>
                    <a href="#" className="button" id="events" onClick={handler}>Events</a>
                    <a href="#" className="button" id="about" onClick={handler}>About</a>
                    <a href="#" className="button" id="signOut" onClick={props.signOut}>signout</a>
                </div>
                

            </header>
        </div>
    );
}
export default Header;