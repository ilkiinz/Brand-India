import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './About/About';
import Home from './Home/Home';


let App = () => {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
  );
}

export default App;
