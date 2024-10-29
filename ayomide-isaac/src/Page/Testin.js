import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './page.css'; // Make sure your CSS matches the original styles

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      const animationWrap = sectionRef.current.querySelector('.animation-wrap');
      const direction = animationWrap.classList.contains('to-left') ? '-100%' : '100%';

      gsap.to(animationWrap, {
        x: direction,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=200%',
          scrub: true,
          pin: true,
        },
      });
    }
  }, []);

  return (
    <div>
      <section className="blank">
        <h1>ScrollTrigger Bi-Directional Fake Horizontal Scroll</h1>
        <p>...</p>
      </section>

      <section className="horizontal" ref={sectionRef}>
        <div className="pin-wrap">
          <div className="animation-wrap to-right">
            {[...Array(10)].map((_, index) => (
              <div key={index} className="item">
                Item {index + 1}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="blank">
        <h1>...ScrollTrigger for the win...</h1>
        <p>...</p>
      </section>
    </div>
  );
};

export default HorizontalScroll;
