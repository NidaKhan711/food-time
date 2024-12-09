import '../Style/Cards.scss';
import Data from '../assets/Data.js';
import btn from '../assets/btn.png';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Cards = () => {


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

   
    gsap.fromTo('.card', 
      {
        y: 100,  
        opacity: 0,
      }, 
      {
        y: 0, 
        opacity: 1, 
        duration: 1.5, 
        ease: 'power3.out', 
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.cards',
          start: 'top 80%', 
          end: 'top 30%',
          scrub: true, 
          markers: false,
        }
      }
    );
  }, []);

  return (
    <div id='menu' className="cards">
      {Data.map((data) => {
        return (
          <div className="card" key={data.id}>
            <img src={data.Image} alt="img" />
            <p>{data.discription}</p>
            <img src={btn} className="btn" alt="img" />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
