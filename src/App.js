import React from 'react';
import './App.css';
import {Link, Route, Routes } from 'react-router-dom';
import logo from "./assets/logo.svg"
import Home from './Home'
function App() {
  return (
    <div className='container'>
<nav className="navbar">
      <img src={logo} alt="Logo" />
        
        <div>
            <Link className="link">About us</Link>
  
            <Link className="link">Our People</Link>
    
            <Link className="link">Offices</Link>
</div>
    </nav>
    
<Routes>
  <Route path='./home' Component={<Home />}/>
</Routes>




    </div>

  );
}

export default App;
