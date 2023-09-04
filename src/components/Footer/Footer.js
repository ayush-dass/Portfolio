import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <footer className='footer'>
            <div className="footer__container container grid">
                <ul className="footer__links">
                    <li>
                        <a href="#about" className='footer__link'>About</a>
                    </li>

                    <li>
                        <a href="#services" className='footer__link'>Services</a>
                    </li>

                    <li>
                        <a href="#projects" className='footer__link'>Projects</a>
                    </li>
                </ul>

                <span className='footer__copy'>
                    &#169; All Rights Reserved By
                    <a href="/#">Ayush Das.</a>
                </span>
            </div>
        </footer>
    </div>
  )
}

export default Footer