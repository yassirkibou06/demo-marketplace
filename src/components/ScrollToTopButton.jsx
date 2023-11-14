import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { MdKeyboardArrowUp } from 'react-icons/md';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check the scroll position and update the visibility state
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const threshold = 300; // Adjust this value to control when the button appears

    setIsVisible(scrollY > threshold);
  };

  // Add the scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll back to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button 
      className={`p-3 fixed bottom-20 right-5 z-10 ${isVisible ? 'visible' : 'invisible'}`}
      onClick={scrollToTop}
    >
      <MdKeyboardArrowUp className='text-3xl' />
    </Button>
  );
};

export default ScrollToTopButton;
