import React, { useState, useEffect, useMemo, useRef } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollUpButton from './components/ScrollUpButton/ScrollUpButton';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Declare refs at the top level of the component
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Create an object to store the refs
  const sectionRefs = useMemo(() => ({
    home: homeRef,
    about: aboutRef,
    services: servicesRef,
    projects: projectsRef,
    contact: contactRef,
  }), []);


  const handleSectionIntersection = (sectionId, entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(sectionId);
        }
      });
    };

  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // No margin
      threshold: 0.5, // Trigger when more than 50% of the element is visible
    };
  
    // Create an Intersection Observer for each section
    const observers = {};
  
  Object.keys(sectionRefs).forEach((sectionId) => {
    observers[sectionId] = new IntersectionObserver(
      (entries) => {
        handleSectionIntersection(sectionId, entries); // Pass the correct sectionId
      },
      observerOptions
    );
    if (sectionRefs[sectionId].current) {
      observers[sectionId].observe(sectionRefs[sectionId].current);
    }
  });
  
    // Clean up observers
    return () => {
      Object.keys(sectionRefs).forEach((sectionId) => {
        if (sectionRefs[sectionId].current && observers[sectionId]) {
          observers[sectionId].unobserve(sectionRefs[sectionId].current);
        }
      });
    };
  }, [sectionRefs]);


  return (
    <div>
      <NavBar activeSection={activeSection} />
      <main className='main'>
        <Home ref={homeRef} sectionId="home"/>
        <About ref={aboutRef} sectionId="about"/>
        <Services ref={servicesRef} sectionId="services"/>
        <Projects ref={projectsRef} sectionId="projects"/>
        <Contact ref={contactRef} sectionId="contact"/>
        <Footer />
      </main>
      <ScrollUpButton />
    </div>
  );
};

export default App;
