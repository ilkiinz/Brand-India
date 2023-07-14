import React from 'react';
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import About from './About';
import  Nav  from "./Nav";
function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Nav />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>

  );
}

export default App;
