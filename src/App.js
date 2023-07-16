import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import  Nav  from "./Nav";
import Footer from "./Footer"
import vector from "./assets/Vector.svg"
import orange from "./assets/orange.svg"
import india from "./assets/india.svg"
function App() {
  return (
    <div className='container'>
      <Nav />
  
     <div className='flag-block'>

      <div className='get-touch'>
       <p>Get involved in of the world’s fastest growing major economies</p>
       <button>Get Touch</button>
      </div>

      <div className='flag'>
      <img className="vector" src={vector} alt='vector'/>
      <img className='orange' src={orange} alt='orange'/>
      <img className='india' src={india} alt='indida'/>
      </div>

     </div>



















      <Routes>
        <Route path='/about' element={<About />} />
      </Routes>
     
     
      <Footer />
    </div>

  );
}

export default App;
