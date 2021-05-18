import React, {useState,useEffect} from 'react';
import {FaArrowCircleUp} from '@react-icons/all-files/fa/FaArrowCircleUp';
import useDarkMode from '../hooks/useDarkMode';

  
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

 const [colorTheme, setTheme] = useDarkMode();

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
    <div className="fixed bg-pink bottom-3 right-3  cursor-pointer">
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="fixed p-2 rounded-lg bg-yellow-1100 bottom-3 right-3 lg:bottom-5 lg:right-5 cursor-pointer dark:bg-[#98ca3f] dark:text-[#03091e]"
        >
          < FaArrowCircleUp className="text-white text-3xl dark:bg-[#98ca3f] dark:text-[#03091e]" />  
        </div>
      )}
    </div>
    
 <div className="fixed bg-pink bottom-3 right-3  cursor-pointer">
    
        <div
          onClick={() =>setTheme(colorTheme)}
          className="fixed p-2 rounded-lg bg-yellow-1100 bottom-16 right-3 lg:bottom-20 lg:right-5 cursor-pointer dark:bg-[#98ca3f] dark:text-[#03091e]"
        >
{colorTheme === 'light' ? (
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 dark:text-[#03091e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
</svg>  ) : (
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
</svg>

 ) }
        </div>
      
    </div>
 </>

  );
}
