import React from 'react'
import './footer.style.scss'

import { ReactComponent as Github } from '../../assets/github.svg'
import { ReactComponent as Linkedin } from '../../assets/linkedin.svg'
import { ReactComponent as Email } from '../../assets/email.svg'
import { ReactComponent as ArrowUp } from '../../assets/arrow-up.svg'

const currentYear = new Date().getFullYear()

const Footer = () => {
  const scrollToHome = (): void => {
    const element: HTMLElement | null = document.querySelector('#home')

    if (!element) {
      return
    }

    element.scrollIntoView()
  }

  return (
    <footer className='footer'>
      <div className='footer-up-btn' onClick={scrollToHome} tabIndex={0}>
        <ArrowUp />
      </div>

      <div className='footer-social'>
        <a
          className='footer-social-item'
          href='https://github.com/patrik-pk'
          target='_blank'
          tabIndex={0}
        >
          <Github />
        </a>
        <a
          className='footer-social-item'
          href='https://www.linkedin.com/in/patrik-pukanec-2527b418a/'
          target='_blank'
          tabIndex={0}
        >
          <Linkedin />
        </a>
        <a
          className='footer-social-item'
          href='mailto:patrik.pukanec@gmail.com'
          tabIndex={0}
        >
          <Email />
        </a>
      </div>

      <p className='footer-copyright'>
        patrikpk.com <span>©{currentYear}</span>
      </p>
    </footer>
  )
}

export default Footer
