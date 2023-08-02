import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';
import Logo from "../assets/Logo.svg";




function Footer() {
    return (
        <div className="footer">
            
            <div className="main-footer-yuxari">
            </div>
            <div className="main-footer-yuxari">
            </div>

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
                    <Link to={'/Contact'} className="linkf">Contact us</Link>
                </div>

                <div className="footer-block3">
                    <p className="about-brand" style={{cursor:"default"}}>Brand Spain Limited 2022</p>
                </div>

            </div>

            <div className="main-footer-right">
                <img className="foot-logo" src={Logo} alt="logo" />
                <p className="subscribe">Subscribe to our Newsletter</p>

                <div className="input-container">
                    <input type="text" placeholder="Enter Your Email" />
                    <button>Subscribe</button>
                </div>

            </div>


        </div>
    );
};

export default Footer;