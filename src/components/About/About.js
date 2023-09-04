import React, {useEffect , forwardRef} from 'react';
import './About.css'
import aboutImage from '../../assets/img/about-pfp.jpg';
import randomLine from '../../assets/img/random-lines.svg';
import ScrollReveal from 'scrollreveal';

const About = forwardRef((props, ref) => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 400,
      // reset: true // Animations repeat
    });

    sr.reveal(`.about__image`, { origin: 'right' });
    sr.reveal(`.about__container .section__title-1, .about__info`,{ origin: 'left' });

    // Cleanup ScrollReveal when the component unmounts
    return () => {
      sr.destroy();
    };
  }, []);
  return (
    <div ref={ref}>
        <section className='about section' id='about'>
          <div className="about__container container grid">
            <h2 className="section__title-1">
              <span>About Me.</span>
            </h2>

            <div className="about__perfil">
              <div className="about__image">
                <img src={aboutImage} alt="aboutImage" className='about__img'/>

                <div className="about__shadow"></div>

                <div className="geometric-box"></div>
                <img src={randomLine} alt="line" className='about__line'/>
                <div className='about__box'></div>
              </div>
            </div>

            <div className="about__info">
              <p className='about__description'>
                Passionate about creating <b>Web Pages</b> with <b>UI/UX User Interface</b>, I have years of experience and many clients are happy with the projects carried out.
              </p>

              <ul className="about__list">
                <li className="about__item">
                  <b>My Skills Are:</b> HTML, CSS, JavaScript, React, Git & GitHub, Bootstrap, Flutter & Figma.
                </li>
              </ul>

              <div className="about__buttons">
                <a href="#contact" className="button">
                  <i className="ri-send-plane-line"></i> Contact Me
                </a>

                <a href="https://in.linkedin.com" target='_blank'  rel="noreferrer" className="button__ghost">
                  <i className="ri-linkedin-box-line"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
});

export default About