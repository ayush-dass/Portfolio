import React, { useEffect , useState , forwardRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import curvedArrow from '../../assets/img/curved-arrow.svg';
import ScrollReveal from 'scrollreveal';

const Contact = forwardRef((props, ref) => {

  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await emailjs.sendForm(
        'service_a21yzge',
        'template_27sm79b',
        e.target,
        '_P4ah43PketgwYknX'
      );
      if (response.status === 200) {
        setIsSuccess(true);
        setMessage('Message sent successfully ✅');
        e.target.reset();
        setTimeout(() => {
          setMessage('');
          setIsSuccess(false);
        }, 5000);
      } else {
        setIsError(true);
        setMessage('Message not sent (service error) ❌');
      }
    } catch (error) {
      setIsError(true);
      setMessage('Message not sent (service error) ❌');
    }
  };


  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 400,
      // reset: true // Animations repeat
    });

    sr.reveal(`.contact__mail`, { origin: 'right' });
    sr.reveal(`.contact__social, .contact__data`,{ origin: 'left' });

    // Cleanup ScrollReveal when the component unmounts
    return () => {
      sr.destroy();
    };
  }, []);

  
  return (
    <div ref={ref}>
        <section className='contact section' id='contact'>
            <div className="contact__container grid">
              <div className="contact__data">
                <h2 className="section__title-2">
                  <span>Contact Me.</span>
                </h2>

                <p className="contact__description-1">
                  I will read all emails. Send me any
                  message you want and I'll get back to you.
                </p>

                <p className="contact__description-2">
                  I need your <b>Name</b> and <b>Email Address</b>, but
                  you won't receive anything other than your reply.
                </p>

                <div className="geometric-box"></div>
              </div>

              <div className="contact__mail">
                <h2 className="contact__title">
                  Send Me A Message
                </h2>

                <form action="" onSubmit={sendEmail} className="contact__form" id="contact-form">
                  <div className="contact__group">
                    <div className="contact__box">
                      <input type="text" name="user_name" className="contact__input" id="name" required placeholder='First Name' autoComplete='true'/>
                      <label htmlFor="name" className="contact__label">First Name</label>
                    </div>

                    <div className="contact__box">
                      <input type="email" name="user_email" className="contact__input" id="email" required placeholder='Email Address' />
                      <label htmlFor="email" className="contact__label">Email Address</label>
                    </div>
                  </div>

                    <div className="contact__box">
                      <input type="text" name="user_subject" className="contact__input" id="subject" required placeholder='Subject'/>
                      <label htmlFor="subject" className="contact__label">Subject</label>
                    </div>

                    <div className="contact__box contact__area">
                      <textarea name="user_message" id="message" className="contact__input" required placeholder='Message'></textarea>
                      <label htmlFor="message" className="contact__label">Message</label>
                    </div>

                    <p id="contact-message" className={isSuccess ? 'success-message' : isError ? 'error-message' : ''}>{message}</p>
                    
                    <button type='submit' className="contact__button button">
                      <i className="ri-send-plane-line"></i> Send Message
                    </button>
                </form>
              </div>

              <div className="contact__social">
                <img src={curvedArrow} alt="" className="contact__social-arrow" />

                <div className="contact__social-data">
                  <div>
                    <p className="contact__social-description-1">
                      Does not send emails
                    </p>

                    <p className="contact__social-description-2">
                      Write me on my social networks
                    </p>
                  </div>

                  <div className="contact__social-links">
                    <a href="https://github.com/ayush-dass" target='_blank' rel="noreferrer" className="contact__social-link">
                      <i className="ri-github-line"></i>
                    </a>

                    <a href="https://www.instagram.com/__ayush.das__" target='_blank' rel="noreferrer" className="contact__social-link">
                      <i className="ri-instagram-line"></i>
                    </a>

                    <a href="https://www.linkedin.com" target='_blank' rel="noreferrer" className="contact__social-link">
                      <i className="ri-linkedin-box-line"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </section>
    </div>
  );
});

export default Contact

