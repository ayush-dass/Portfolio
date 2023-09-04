import React, {useEffect,forwardRef} from 'react';
import './Home.css'
import homePerfil from '../../assets/img/pfp.jpeg';
import curvedArrow from '../../assets/img/curved-arrow.svg';
import randomLine from '../../assets/img/random-lines.svg';
import ScrollReveal from 'scrollreveal';

const Home = forwardRef((props, ref) => {
    useEffect(() => {
        const sr = ScrollReveal({
          origin: 'top',
          distance: '60px',
          duration: 2500,
          delay: 400,
          // reset: true // Animations repeat
        });
    
        sr.reveal(`.home__perfil`, { origin: 'right' });
        sr.reveal(`.home__name, .home__info`,{ origin: 'left' });
    
        // Cleanup ScrollReveal when the component unmounts
        return () => {
          sr.destroy();
        };
      }, []);
      
  return (
    <div ref={ref}>
        <section className='home section' id='home'>
            <div className="home__container container grid">
                <h1 className="home__name">
                    Ayush Das
                </h1>

                <div className="home__perfil">
                    <div className="home__image">
                        <img src={homePerfil} alt="image1" className="home__img" />
                        <div className="home__shadow"></div>

                        <img src={curvedArrow} alt="arrow" className='home__arrow'/>
                        <img src={randomLine} alt="line" className='home__line'/>

                        <div className='geometric-box'></div>
                    </div>

                    <div className="home__social">
                        <a href="https://www.instagram.com/__ayush.das__/" rel="noreferrer" target='_blank' className="home__social-link">
                            <i className='ri-instagram-line'></i>
                        </a>

                        <a href="https://in.linkedin.com/" target='_blank'  rel="noreferrer" className="home__social-link">
                            <i className='ri-linkedin-box-line'></i>
                        </a>

                        <a href="https://github.com/ayush-dass/" target='_blank' rel="noreferrer" className="home__social-link">
                            <i className='ri-github-line'></i>
                        </a>
                    </div>
                </div>

                <div className="home__info">
                    <p className="home__description">
                        <b>Frontend Developer</b>, with knowledge in web development and design, I offer the best projects resulting in quality work.
                    </p>

                    <a href="#about" className="home__scroll">
                        <div className="home__scroll-box">
                            <i className='ri-arrow-down-s-line'></i>
                        </div>

                        <span className='home__scroll-text'>Scroll Down</span>
                    </a>
                </div>
            </div>
        </section>
    </div>
  );
});

export default Home;