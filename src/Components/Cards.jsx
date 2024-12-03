import '../Style/Cards.scss';
import Data from '../assets/Data.js';
import btn from '../assets/btn.png';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Cards = () => {

  // Register ScrollTrigger plugin with GSAP
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for card elements
    gsap.fromTo('.card', 
      {
        y: 100,  // Initial position below
        opacity: 0, // Initially hidden
      }, 
      {
        y: 0, // Final position (normal)
        opacity: 1, // Fully visible
        duration: 1.5, // Smooth and gradual animation duration
        ease: 'power3.out', // Ease for smooth deceleration
        stagger: 0.2, // Stagger the animation for each card (0.2s delay between cards)
        scrollTrigger: {
          trigger: '.cards',
          start: 'top 80%', // Trigger when 80% of the cards section is in view
          end: 'top 30%',
          scrub: true, // Smooth scroll-based animation
          markers: false, // Disable markers in production
        }
      }
    );
  }, []);

  return (
    <div className="cards">
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
