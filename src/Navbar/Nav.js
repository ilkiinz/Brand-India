import React from "react";
import { Link } from 'react-router-dom';
import logo from "../assets/logo.svg"
import WebFont from 'webfontloader';
import "./Nav.css"
function Nav() {
    return (
        <div>
            <nav className="navbar">
            <Link to={'/'}><img src={logo} alt="Logo" /></Link>

                <div>
                    <Link to={'/about'} className="link">About us</Link>

                    <Link className="link">Our People</Link>

                    <Link className="link">Offices</Link>
                </div>
            </nav>
        </div>
    )
}

export default Nav;