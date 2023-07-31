import React from "react";
import "./Offices.css";
import Nav from "../Navbar/Nav";
import Footer from "../Footer/Footer";
import Leeds from "../assets/Leeds.svg";
import Plus from "../assets/Plus.svg";
function Offices() {
 return(
     <div className="wrap">
         <Nav />
         <div className="head-cont">
             <h3 className="text-orange">Where is the Brand India</h3>
             <h3 className="text-black">office located?</h3>
             <p>Brand India Limited is a company registered in<br /> England and Wales</p>
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
                     <div className="first">
                         <h4>London</h4>
                         <button> <img src={Plus} alt="plus" /></button>
                     </div>
                     <div className="second">
                         <h4>Cardiff</h4>
                         <button> <img src={Plus} alt="plus" /></button>
                     </div>
                 </div>

                 <div className="btns1">
                     <div className="third">
                         <h4>Edinburgh</h4>
                         <button> <img src={Plus} alt="plus" /></button>
                     </div>

                     <div className="fourth">
                         <h4>West Midlands</h4>
                         <button> <img src={Plus} alt="plus" /></button>
                     </div>
                 </div>
             </div>

             <div>
             <div className="office-head">
                 <h4>India Office</h4>
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