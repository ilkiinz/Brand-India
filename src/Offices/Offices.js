import React from "react";
import "./Offices.css";
import Nav from "../Navbar/Nav";
import Footer from "../Footer/Footer";
import Leeds from "../assets/Leeds.svg";
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

         <Footer />
     </div>
       
 )
};

export default Offices;