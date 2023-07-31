import React from "react";
import "./Our.css";
import Nav from "../Navbar/Nav";
import Footer from "../Footer/Footer";
import Friends from "../assets/Friends.svg";
import Men from "../assets/Men.svg"

function Our(){
    return(
        <div className="wrap">
        <Nav />

            <div className="family-cont">
                <div className="family-head">
                    <h4>Meet the </h4>
                    <h4 className="green">Brand India Family</h4>
                </div>

                <div className="meet-cont">
                   <img src={Friends} alt="friends" />

                <div className="read">
                    <h5>Tony Lloyd & Fiona Lloyd</h5>
                    <p>Tony is an experienced global executive with
                         over 40 years experience in finance and business development.</p>

                    <p>Tony and Fiona recently lived in Mumbai for 
                        over 2 years and developed a extensive and varied network of contacts.</p>   

                    <button><p>Read More</p></button>  
                </div>
                </div>

                <div className="meet-cont1">
                   

                <div className="read1">
                    <h5>Ben Rankin</h5>
                    <p>Ben is an experienced business 
                        development <br/> executive with a demonstrated
                         history of working in the cyber security market.</p>
                    <button><p>Read More</p></button>  
                </div>
                <img src={Men} alt="men"/>
                </div>


        </div>

        <Footer />
        </div>
    )
};

export default Our;