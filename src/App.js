import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import  Nav  from "./Nav";
import Footer from "./Footer"
function App() {
  return (
    <div className='container'>
      <Nav />
      <Routes>

        <Route path='/about' element={<About />} />
      </Routes>
     
     
      <Footer />
    </div>

  );
}

export default App;
