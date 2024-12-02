import React from 'react'
import '../Style/Header.scss'
import pizza from '../assets/pizza.png'
import burger from '../assets/burger.png'
import sandwich from '../assets/sandwich.png'

const Header = ({ headerCount }) => {
  if (headerCount === 0) {

   return <img src={pizza} className='bg' alt="img" />


  } else if (headerCount === 1) {
    return <img src={burger} className="bg" alt="img" />;
  } else if (headerCount === 2) {
    return <img src={sandwich} className="bg" alt="img" />;
  }
}

export default Header