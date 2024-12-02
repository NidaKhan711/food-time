import React from 'react'
import '../Style/Navbar.scss'
import baskit from '../assets/baskit.png'
import logo from '../assets/logo.png'

const Navbar = () => {

    return (
        <div className="background">
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <div className="basket-icon">
                    <img
                        src={baskit}
                        alt="Basket"
                    />
                </div>
                </ul>
               
            </nav>
        </div>
    );

}

export default Navbar