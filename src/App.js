import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import  Nav  from "./Nav";
import Footer from "./Footer"
import vector from "./assets/Vector.svg"
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
      <img src={vector} alt='vector' />
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
