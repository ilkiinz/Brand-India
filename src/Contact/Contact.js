import React from 'react';
import './Contact.css';
import  Nav  from "../Navbar/Nav";
import Footer from "../Footer/Footer";

function Contact() {
    return(
           <div>
            <Nav />
            
            <div className='contact-cont'>
                <div className='contact-head'>
                    <h4>Hey!</h4>
                    <h4 className='green'>Tell us all the things 👋</h4>
                </div>

                <div className='form-cont'>
                    <div className='form-head'>
                        <p>My project is...</p>
                        <div className='head-btn'>
                            <button>Service</button>
                            <button>Industrial</button>
                            <button>IT</button>
                            <button>Finance</button>
                        </div>
                        <div className='head-btn'>
                            <button>Startup</button>
                            <button>Other</button>
                        </div>
                    </div>

                    <div className='form-main'>
                    <input type='text' placeholder=" Your Name"/>
                    <hr/>
                    <input type='email' placeholder=" Your Email"/>
                    <hr/>
                    <input type='text' placeholder=" Your Message"/>
                    <hr/>
                    </div>
                       

                    <div className='form-foot'>
                      <p>Project Budget</p>
                    
                    <div className='head-btn'>
                            <button>10-20K</button>
                            <button>20-50K</button>
                            <button>50-100K</button>
                            <button>Other</button>
                        </div>

                        </div>
                        <div className='send'>
                        <button>Send Request  →</button>
                        </div>
              </div>

            </div>
           
             <Footer />
           </div>

    )
}

export default Contact;