import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../Style/Header.scss';
import pizza from '../assets/pizza.png';
import burger from '../assets/burger.png';
import sandwich from '../assets/sandwich.png';
import pb from '../assets/pizzaB.png';
import bb from '../assets/burgerB.png';
import sb from '../assets/sandB.png';

const Header = ({ headerCount, headerData, setHeaderCount }) => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  let image;
  let buttonImages = [pb, bb, sb];

  if (headerCount === 0) {
    image = pizza;
  } else if (headerCount === 1) {
    image = burger;
  } else if (headerCount === 2) {
    image = sandwich;
  }

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power2.out' }
    );
    gsap.fromTo(
      imageRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power2.out', delay: 0.3 }
    );
  }, [headerCount]);

  return (
    <div className="hero-anim">
      <div className="first">
        <div className="text" ref={textRef}>

          <h3>{headerData.text1}</h3>
          <h1>{headerData.text2}</h1>
          <p>{headerData.text3}</p>
        </div>
        <div className="img-content" ref={imageRef}>

          <img src={image} className="bg" alt="img" />
        </div>
      </div>
      <div className="btns">

        {buttonImages.map((btnImage, index) => (
          <img
            key={index}
            onClick={() => setHeaderCount(index)}
            className={headerCount === index ? "header-dot dot" : "header-dot"}
            src={btnImage}
            alt={`button-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
