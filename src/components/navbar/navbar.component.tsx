import React, { useState, useEffect, useContext } from 'react'
import './navbar.style.scss'

import { LanguageContext } from '../../context/LanguageContext'

interface Link {
  name: string
  element: string
}

const Navbar = () => {
  const [expanded, setExpanded] = useState<boolean>(false)
  const [activeLink, setActiveLink] = useState<Link | null>(null)

  const langContext = useContext(LanguageContext)
  const { dictionary } = langContext.lang

  const scrollToElement = (link: Link): void => {
    const element: HTMLElement | null = document.querySelector(link.element)

    if (!element) {
      return
    }

    element.scrollIntoView()
  }

  const getActiveLinkBasedOnScroll = () => {
    dictionary.navigationLinks.forEach((link: Link) => {
      const section: HTMLElement | null = document.querySelector(link.element)

      if (section) {
        const sectionTop = section.offsetTop

        if (window.pageYOffset >= sectionTop - 60) {
          setActiveLink(link)
        }
      }
    })
  }

  useEffect(() => {
    getActiveLinkBasedOnScroll()
    // TODO: throttle & debounce
    window.addEventListener('scroll', getActiveLinkBasedOnScroll)

    return () => {
      window.removeEventListener('scroll', getActiveLinkBasedOnScroll)
    }
  }, [])

  return (
    <nav className={`nav ${expanded ? 'expanded' : ''}`}>
      <div className='nav-content container'>
        <ul className='nav-content-links'>
          {dictionary.navigationLinks.map((link: Link) => (
            <li
              className={`nav-content-links-item nav-link ${
                activeLink && activeLink.element == link.element ? 'active' : ''
              }`}
              key={link.element}
              onClick={() => scrollToElement(link)}
              tabIndex={0}
            >
              {link.name}
            </li>
          ))}
        </ul>

        <div
          className='nav-content-btn'
          onClick={() => setExpanded(prev => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className='nav-expanded'>
        <ul className='nav-expanded-links'>
          {dictionary.navigationLinks.map((link: Link) => (
            <li
              className={`nav-expanded-links-item nav-link ${
                activeLink && activeLink.element == link.element ? 'active' : ''
              }`}
              key={link.element}
              onClick={() => {
                scrollToElement(link)
                setExpanded(false)
              }}
            >
              {link.name}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
