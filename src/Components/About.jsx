import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../Style/About.scss';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutImageRef = useRef(null);
  const aboutTextRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      aboutImageRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: aboutImageRef.current,
          start: 'top 80%',
          end: 'bottom 50%',
          toggleActions: 'play none none none',
        },
      }
    );

    gsap.fromTo(
      aboutTextRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: aboutTextRef.current,
          start: 'top 80%',
          end: 'bottom 50%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <div className="about-section">
      <div className="about-image" ref={aboutImageRef}>
        <img src="./pizzaA.png" alt="About Us" />
      </div>
      <div className="about-text" ref={aboutTextRef}>
        <h2>About Us</h2>
        <p>
          We bring the taste of your favorite pizzas, burgers, and sandwiches right to your doorstep.
          Specializing in quick, delicious meals made from high-quality ingredients, we offer a simple yet
          satisfying menu that guarantees satisfaction with every order. Whether you're craving a cheesy
          pizza, a juicy burger, or a mouthwatering sandwich, you can now enjoy our delicious offerings with
          just a few clicks. Order online and have your favorites delivered straight to you – fast, fresh, and
          always tasty.
        </p>
      </div>
    </div>
  );
};

export default About;
