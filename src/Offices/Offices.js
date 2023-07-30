import React from "react";
import "./Offices.css";
import Nav from "../Navbar/Nav";
import Footer from "../Footer/Footer";

function Offices() {
 return(
     <div className="wrap">
         <Nav />
         <div className="head-cont">
             <h3 className="text-orange">Where is the Brand India</h3>
             <h3 className="text-black">office located?</h3>
             <p>Brand India Limited is a company registered in<br /> England and Wales</p>
         </div>
         <Footer />
     </div>
       
 )
};

export default Offices;