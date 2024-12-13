import React from 'react';
import '../Style/Footer.scss';
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                {/* Logo Section */}
                <div className="footer__logo">
                    <img src={logo} alt="" />
                    <p>Experience the best with us! Our exceptional food quality and flavors set us apart. Taste the difference that makes every bite unforgettable!</p>
                </div>

                <div className="footer__links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#faq">FAQs</a></li>
                    </ul>
                </div>

                <div className="footer__social">
                    <h3>Follow Us</h3>
                    <div className="footer__social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faFacebook} style={{ color: '#E4405F', fontSize: '30px' }} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faTwitter} style={{ color: '#E4405F', fontSize: '30px' }} />

                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faInstagram} style={{ color: '#E4405F', fontSize: '30px' }} />

                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} style={{ color: '#E4405F', fontSize: '30px' }} />

                        </a>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <p>&copy; 2024 MyWebsite. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
