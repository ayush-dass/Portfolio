import React, { useState, useEffect } from 'react';
import '../NavBar/NavBar.css';
import { Helmet } from 'react-helmet';

const NavBar = ({ activeSection }) => {
  // State variables to track theme and icon
  const [theme, setTheme] = useState(localStorage.getItem('selected-theme') || 'light');
  const [icon, setIcon] = useState(localStorage.getItem('selected-icon') || 'ri-sun-line');

  const toggleTheme = () => {
    // Toggle theme and icon
    const newTheme = theme === 'light' ? 'dark' : 'light';
    const newIcon = icon === 'ri-sun-line' ? 'ri-moon-line' : 'ri-sun-line';
    
    // Update state and localStorage
    setTheme(newTheme);
    setIcon(newIcon);
    localStorage.setItem('selected-theme', newTheme);
    localStorage.setItem('selected-icon', newIcon);
  };

  // Use effect to apply the theme on initial render
  useEffect(() => {
    document.body.classList.toggle('dark-theme', theme === 'dark');
    document.body.classList.toggle('ri-moon-line', icon === 'ri-moon-line');
  }, [theme, icon]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const closeMenuOnClick = () => {
    closeMenu();
  };

  const handleScroll = () => {
    // Update the state based on scroll position
    if (window.scrollY >= 50) {
      setHasShadow(true);
    } else {
      setHasShadow(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/3.4.0/remixicon.css"
          crossOrigin=""
        />
      </Helmet>
      <header className={`header ${hasShadow ? 'shadow-header' : ''}`} id='header'>
        <nav className='nav container'>
          <a href='/#' className='nav__logo'>
            <span className='nav__logo-circle'>AD</span>
            <span className='nav__logo-name'>Ayush Das.</span>
          </a>

          <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`} id='nav-menu'>
            <span className='nav__title'>Menu</span>

            <h3 className='nav__name'>Ayush</h3>

            <ul className='nav__list'>
              <li className="nav__item">
                <a href="#home" className={`nav__link ${activeSection === 'home' ? 'active-link' : ''}`} onClick={closeMenuOnClick}>
                  Home
                </a>
              </li>

              <li className="nav__item">
                <a href="#about" className={`nav__link ${activeSection === 'about' ? 'active-link' : ''}`} onClick={closeMenuOnClick}>
                  About Me
                </a>
              </li>

              <li className="nav__item">
                <a href="#projects" className={`nav__link ${activeSection === 'projects' ? 'active-link' : ''}`} onClick={closeMenuOnClick}>
                  Projects
                </a>
              </li>

              <li className="nav__item">
                <a href="#contact" className={`nav__link nav__link-button ${activeSection === 'contact' ? 'active-link' : ''}`} onClick={closeMenuOnClick}>
                  Contact Me
                </a>
              </li>
            </ul>

            {/* Close Button */}
            <div className="nav__close" id="nav-close" onClick={closeMenu}>
              <i className="ri-close-line"></i>
            </div>
          </div>

          <div className="nav__buttons">
            {/* Theme Button */}
            <i className={`ri-moon-line change-theme ${icon}`} id="theme-button" onClick={toggleTheme}></i>
            {/* toggle buttons */}
            <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
              <i className="ri-menu-4-line"></i>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;