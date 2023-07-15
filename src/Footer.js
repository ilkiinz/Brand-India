import React from "react";
import "./Footer.css";
import logo2 from "./assets/logo2.svg"
import WebFont from 'webfontloader';


function Footer() {
    return (
        <div className="footer">

            <div className="main-footer-left">
                <div className="footer-block1">
                    <p className="first-word">Company</p>
                    <p>About Us</p>
                    <p>Why Choose us</p>
                    <p>Brand</p>
                </div>

                <div className="footer-block2">
                    <p className="first-word">Resource</p>
                    <p>Privarcy Policy</p>
                    <p>Terms and Condition</p>
                    <p>Contact Us</p>
                </div>

                <div className="footer-block3">
                    <p className="about-brand">Brand India Limited 2022</p>
                </div>

            </div>


    
        </div>
    );
};

export default Footer;