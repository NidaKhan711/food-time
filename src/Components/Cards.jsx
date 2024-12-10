import '../Style/Cards.scss';
import {Cardi} from '../assets/Data.js';
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
      {Cardi.map((Cardi) => {
        return (
          <div className="card" key={Cardi.id}>
            <img src={Cardi.Image} alt="img" />
            <p>{Cardi.discription}</p>
            <img src={btn} className="btn" alt="img" />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
