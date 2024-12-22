import React from 'react'
import '../Style/Navbar.scss'
import baskit from '../assets/baskit.png'
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";

const Navbar = () => {


    return (
        <div className="background">
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <ul className="nav-links">
                    <Link
                        to="./"  ><li><a href="#home">Home</a></li>
                    </Link>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <div className="basket-icon">
                        <Link to="/Carte">
                            <img
                                src={baskit}
                                alt="Basket"
                            />
                        </Link>
                        <div className={getTotalCardAmount() === 0 ? "" : "dot"}></div>
                    </div>
                </ul>

            </nav>


        </div>
    );

}

export default Navbar