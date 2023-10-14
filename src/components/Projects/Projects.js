import React, { useEffect , forwardRef} from 'react';
import './Projects.css';
import ScrollReveal from 'scrollreveal';

import img1 from '../../assets/img/project-1.png'

const Projects = forwardRef((props, ref) => {

    var img2 = "https://img.freepik.com/free-vector/video-conference-remote-working-flat-illustration-screen-laptop-with-group-colleagues-people-conn_88138-548.jpg?w=2000"
    var img3 = "https://img.freepik.com/free-vector/tiny-programmers-big-laptop-writing-script-coders-app-developers-with-computers-flat-vector-illustration-programming-engineering-software-development-concept-banner-landing-web-page_74855-25360.jpg?w=1060&t=st=1693734610~exp=1693735210~hmac=05886017ba0d161b6354ba7dda4f6f6002fa628452b5a64c8da68f8ba0a8b923"

    useEffect(() => {
        const sr = ScrollReveal({
          origin: 'top',
          distance: '60px',
          duration: 2500,
          delay: 400,
          // reset: true // Animations repeat
        });

        sr.reveal(`.projects__card`, { interval: 100 });
    
        // Cleanup ScrollReveal when the component unmounts
        return () => {
          sr.destroy();
        };
      }, []);

  return (
    <div>
        <section className='projects section' id='projects'>
            <h2 className="section__title-1">
                <span>Projects.</span>
            </h2>

            <div className="projects__container container grid">
                <article className='projects__card'>
                    <div className='projects__image'>
                        <img src={img1} alt="project1" className='projects__img' ref={ref}/>

                        <a href="https://smartbrain-2xew.onrender.com/" rel="noreferrer" target='_blank' className="projects__button button">
                        <i className='ri-arrow-right-up-line'></i>
                        </a>
                    </div>

                    <div className='projects__content'>
                        <h3 className="projects__subtitle">Website</h3>
                        <h2 className="projects__title">Face-Detection Website</h2>

                        <p className="projects__description">
                            The Smart Brain that can detect faces in any image url.
                            Login or Register to keep track of your entries.
                        </p>
                    </div>

                    <div className='projects__buttons'>
                        <a href="https://github.com/ayush-dass" target='_blank' rel="noreferrer" className="projects__link">
                            <i className='ri-github-line'></i> View
                        </a>
                    </div>
                </article>
                {/* --------------------------------------------------------------- */}
                <article className='projects__card'>
                    <div className='projects__image'>
                        <img src={img2} alt="project1" className='projects__img'/>

                        <a href="/Portfolio" className="projects__button button">
                        <i className='ri-arrow-right-up-line'></i>
                        </a>
                    </div>

                    <div className='projects__content'>
                        <h3 className="projects__subtitle">App</h3>
                        <h2 className="projects__title">Yoga App</h2>

                        <p className="projects__description">
                            Project that can carry out in the design
                            and structure of the layout, showing the
                            design at the client's request.
                        </p>
                    </div>

                    <div className='projects__buttons'>
                        <a href="https://github.com" target='_blank' rel="noreferrer" className="projects__link">
                            <i className='ri-github-line'></i> View
                        </a>
                    </div>
                </article>
                {/* --------------------------------------------------------------- */}
                <article className='projects__card'>
                    <div className='projects__image'>
                        <img src={img3} alt="project1" className='projects__img'/>

                        <a href="/Portfolio" className="projects__button button">
                        <i className='ri-arrow-right-up-line'></i>
                        </a>
                    </div>

                    <div className='projects__content'>
                        <h3 className="projects__subtitle">App</h3>
                        <h2 className="projects__title">Fast Food App</h2>

                        <p className="projects__description">
                            Project that can carry out in the design
                            and structure of the layout, showing the
                            design at the client's request.
                        </p>
                    </div>

                    <div className='projects__buttons'>
                        <a href="https://github.com" target='_blank' rel="noreferrer" className="projects__link">
                            <i className='ri-github-line'></i> View
                        </a>
                    </div>
                </article>
                {/* --------------------------------------------------------------- */}
            </div>
        </section>
    </div>
  );
});

export default Projects