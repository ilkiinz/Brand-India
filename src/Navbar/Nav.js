import React from "react";
import { Link } from 'react-router-dom';
import Logo from "../assets/Logo.svg";
import "./Nav.css";
function Nav() {
    return (
        <div>
            <nav className="navbar">
            <Link to={'/'}><img src={Logo} alt="Logo" className="logo" /></Link>

                <div>
                    <Link to={'/about'} className="link">About us</Link>

                    <Link to={'/our people'} className="link">Our People</Link>

                    <Link to={'/offices'} className="link">Offices</Link>
                </div>
            </nav>
        </div>
    )
}

export default Nav;