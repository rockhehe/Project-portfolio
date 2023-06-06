import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import Footer from './components/Footer';

const BackgroundAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const animation = anime({
      targets: container,
      backgroundColor: ['#ffffff', '#808080'],
      easing: 'easeInOutQuad',
      duration: 2000,
      loop: true,
      direction: 'alternate',
    });

    return () => {
      animation.pause();
    };
  }, []);

  return (
    <div ref={containerRef} className="background-container">
< Footer/>
   </div>
  );
};

export default BackgroundAnimation;
//