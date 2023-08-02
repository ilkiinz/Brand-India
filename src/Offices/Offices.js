import React from "react";
import "./Offices.css";
import Nav from "../Navbar/Nav";
import Footer from "../Footer/Footer";
import Leeds from "../assets/Leeds.svg";
import Plus from "../assets/Plus.svg";
import { useState } from 'react';
function Offices() {
  
    const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (location) => {
    setSelectedButton(prevLocation => (prevLocation === location ? null : location));
  };

 return(
    
    
     <div className="wrap">
      
         <Nav />
         <div className="head-cont">
             <h3 className="text-orange">Where is the Brand Spain</h3>
             <h3 className="text-black">office located?</h3>
             <p>Brand Spain Limited is a company registered in<br /> England and Wales</p>
         </div>
            
         <div className="leeds-cont">
             <img src={Leeds} alt="leeds" />

             <div className="leeds-text">
                <h3 className="text-b">Our head office is located in the</h3>
                <h3 className="text-o">Guiseley, Leeds, England </h3>
                <p>Join our superstar team in automating businesses all over the world</p>
             </div>
         </div>

         <div className="office-cont">
             <div className="office-head">
                 <h4>UK Regional Offices</h4>
             </div>

             <div className="office-btns">
                 <div className="btns">
                     <div className="first" style={{padding: selectedButton === 'London' ? 28 : 14}}>
                        <div>
                             <h4>London</h4>
                             <button className="button" onClick={() => handleButtonClick('London')}> <img className="plusImage" src={Plus} alt="plus" /></button>
                        </div> 
                         {selectedButton === 'London' ? <p className="closed-text">1 Lochrin Square, 92-98 Fountainbridge Edinburgh, EH3 9QA</p> : null}
                     </div>

                     <div className="second"  style={{height:103}}>
                         <h4 style={{fontSize: 32}}>Cardiff</h4>
                         <button className="button"> <img src={Plus} alt="plus" /></button>
                     </div>
                 </div>

                 <div className="btns1">
                     <div className="third" style={{height:103}}>
                         <h4 style={{fontSize: 32}}>Edinburgh</h4>
                         <button className="button"> <img src={Plus} alt="plus" /></button>
                     </div>

                     <div className="fourth" style={{height:103}}>
                         <h4 style={{fontSize: 32}}>West Midlands</h4>
                         <button className="button"> <img src={Plus} alt="plus" /></button>
                     </div>
                 </div>
             </div>

             <div>
             <div className="office-head">
                 <h4>Spain Office</h4>
             </div>
              
             <div className="adress-cont">
              <div className="adress">
                <h4>519, Udyog Vihar Phase V</h4>
              </div>
                <div className="adress1">
                    <h4>Sector 19, Gurugram, Haryana</h4>
                </div>
             </div>

             </div>


         </div>
         

         <Footer />
     </div>
       
 )
};

export default Offices;