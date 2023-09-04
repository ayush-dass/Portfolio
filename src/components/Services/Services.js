import React, {useEffect , forwardRef} from 'react';
import './Services.css'
import ScrollReveal from 'scrollreveal';

const Services = forwardRef((props, ref) => {
    useEffect(() => {
        const sr = ScrollReveal({
          origin: 'top',
          distance: '60px',
          duration: 2500,
          delay: 400,
          // reset: true // Animations repeat
        });
    
        sr.reveal(`.services__card`,{ interval: 100 });
    
        // Cleanup ScrollReveal when the component unmounts
        return () => {
          sr.destroy();
        };
      }, []);
  return (
    <div ref={ref}>
        <section className='services section' id='services'>
            <h2 className="section__title-2">
                <span>Services.</span>
            </h2>

            <div className="services__container container grid">
                <article className='services__card'>
                    <div className='services__border'></div>

                    <div className='services__content'>
                        <div className="services__icon">
                            <div className="services__box"></div>
                            <i className='ri-layout-4-line'></i>
                        </div>

                        <h2 className="services__title">Web Design</h2>

                        <p className='servives__description'>
                            Beautiful and elegant designs with
                            interfaces that are intuitive, efficient
                            and pleasant to use for the user.
                        </p>
                    </div>
                </article>

                <article className='services__card'>
                    <div className='services__border'></div>

                    <div className='services__content'>
                        <div className="services__icon">
                            <div className="services__box"></div>
                            <i className='ri-code-box-line'></i>
                        </div>

                        <h2 className="services__title">Development</h2>

                        <p className='servives__description'>
                            Custom web development tailored to your
                            specifications, designed to provide a
                            flawless user experience.
                        </p>
                    </div>
                </article>

                <article className='services__card'>
                    <div className='services__border'></div>

                    <div className='services__content'>
                        <div className="services__icon">
                            <div className="services__box"></div>
                            <i className='ri-smartphone-line'></i>
                        </div>

                        <h2 className="services__title">Mobile App</h2>

                        <p className='servives__description'>
                            Design and transform website projects
                            into mobile apps to provide a seamless
                            user experience.
                        </p>
                    </div>
                </article>
            </div>
        </section>
    </div>
  );
});

export default Services