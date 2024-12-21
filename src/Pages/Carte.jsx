import React from 'react';
import '../Style/Carte.scss'
import DelI from '../assets/deli.png'; 

const Carte = () => {
    return (
        <div className="food-display">
            <h2>Top Dishes Near You</h2>
            <ul className="item-list">
                <li className="item">
                    <span className="item-name">Mashroom Pizza</span>
                    <span className="item-price">$60</span>
                    <span className='item-num'>3</span>
                    <img src={DelI} alt="Remove" className="remove-icon" />
                </li>
                <li className="item">
                    <span className="item-name">Cheese Burger</span>
                    <span className="item-price">$50</span>
                    <span className='item-num'>3</span>
                    <img src={DelI} alt="Remove" className="remove-icon" />
                </li>
                <li className="item">
                    <span className="item-name">Chicken Sandwich</span>
                    <span className="item-price">$70</span>
                    <span className='item-num'>3</span>
                    <img src={DelI} alt="Remove" className="remove-icon" />
                </li>
            </ul>
        </div>
    );
};

export default Carte;
