import React, { useEffect, useState } from 'react';
import './ScrollUpButton.css'

const ScrollUpButton = () => {
  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 400) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`scrollup ${showScroll ? 'show-scroll' : ''}`}
      onClick={scrollToTop}
    >
      <a href="/#" className='scroll-color'><i className="ri-arrow-up-s-line"></i></a>
    </div>
  );
};

export default ScrollUpButton;
