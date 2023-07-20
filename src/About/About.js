import React from "react";
import "./About.css";
import Nav from "../Navbar/Nav";
import Footer from "../Footer/Footer";
import Rectangle from "../assets/Rectangle .svg";
function About() {
    return (
        <div className="wrap">
            <Nav />
         
            <div className="head-cont">
                <h3 className="text-orange">Empowering UK </h3>
                <h3 className="text-black">companies in India</h3>
                <p>Learn more about our story and the hard-working <br /> people behind the company</p>
                <img src={Rectangle} alt="logo" />
                <h4>We help UK based companies set up or expand within the growing Indian
                    market via our long-established
                    network of Indian contacts</h4>
            </div>
              

            <div className="skills-cont">
                <p className="skills-head">What we can do</p>
                <div className="skill-texts">
                    <p>Despite its various advantages India is still a very difficult market for
                        an <br />outsider to penetrate and succeed in.
                    </p>
                    <p>We help any company to build and execute on their Indian <br />expansion plans through:
                    </p>
                    <p>Building a plan tailored to the Indian market and so achieve
                        a faster time to <br /> market and growth.</p>
                    <p>The plan is then fully supported by specific and targeted local introductions
                        <br /> like Potential Market Partner,Relevant Professional Advisors
                        (Legal, Finance, <br /> Sales and Marketing, IT , Real Estate),
                        Local and Central Government bodies,<br /> Potential Funding Partners.</p>
                    <p>Subject to agreement , we typically charge a monthly fixed retainer,
                        plus all <br /> pre-approved travel and incidental costs.
                        Plus, <br />we agree commission on successful sales. </p>
                    <p>The retainer and commission can both be paid in a mixture of cash
                        or in an equity share.</p>
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default About;