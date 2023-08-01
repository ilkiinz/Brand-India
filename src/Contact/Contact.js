import React from 'react';
import './Contact.css';
import  Nav  from "../Navbar/Nav";
import Footer from "../Footer/Footer";
import { useState } from 'react';



function Contact() {
    const [selectedButton, setSelectedButton] = useState('');

    const handleButtonClick = (color) => {
      setSelectedButton(color);
    };

    const [selectedBtn, setSelectedBtn] = useState('');


    const handleButton = (color) => {
        setSelectedBtn(color);
      };
  



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
                            <button onClick={() => handleButtonClick('teal')}  style={{ backgroundColor: selectedButton === 'teal' ? 'teal' : '' }}>Service</button>
                            <button onClick={() => handleButtonClick('orange')}  style={{ backgroundColor: selectedButton === 'orange' ? 'orange' : '' }}>Industrial</button>
                            <button onClick={() => handleButtonClick('green')}  style={{ backgroundColor: selectedButton === 'green' ? 'green' : '' }}>IT</button>
                            <button onClick={() => handleButtonClick('blue')}  style={{ backgroundColor: selectedButton === 'blue' ? 'blue' : '' }}>Finance</button>
                        </div>
                        <div className='head-btn'>
                            <button onClick={() => handleButtonClick('red')}  style={{ backgroundColor: selectedButton === 'red' ? 'red' : '' }}>Startup</button>
                            <button onClick={() => handleButtonClick('yellow')}  style={{ backgroundColor: selectedButton === 'yellow' ? 'yellow' : '' }}>Other</button>
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
                            <button onClick={() => handleButton('purple')}  style={{ backgroundColor: selectedBtn === 'purple' ? 'purple' : '' }}>10-20K</button>
                            <button onClick={() => handleButton('grey')}  style={{ backgroundColor: selectedBtn === 'grey' ? 'grey' : '' }}>20-50K</button>
                            <button onClick={() => handleButton('brown')}  style={{ backgroundColor: selectedBtn === 'brown' ? 'brown' : '' }}>50-100K</button>
                            <button onClick={() => handleButton('pink')}  style={{ backgroundColor: selectedBtn === 'pink' ? 'pink' : '' }}>Other</button>
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