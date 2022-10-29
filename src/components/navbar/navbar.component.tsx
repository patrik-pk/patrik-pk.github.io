import React, { useState, useEffect } from 'react'

import './navbar.style.scss'

interface Link {
  name: string
  element: string
}

const links: Array<Link> = [
  {
    name: 'Home',
    element: '#home'
  },
  {
    name: 'About',
    element: '#about'
  },
  {
    name: 'Projects',
    element: '#projects'
  },
  {
    name: 'Contact',
    element: '#contact'
  }
]

const Navbar = () => {
  const [expanded, setExpanded] = useState<boolean>(false)
  const [activeLink, setActiveLink] = useState<Link | null>(null)

  const scrollToElement = (link: Link): void => {
    const element: HTMLElement | null = document.querySelector(link.element)

    if (!element) {
      return
    }

    element.scrollIntoView()
  }

  const getActiveLinkBasedOnScroll = () => {
    links.forEach(link => {
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
          {links.map(link => (
            <li
              className={`nav-content-links-item nav-link ${
                activeLink && activeLink.element == link.element ? 'active' : ''
              }`}
              key={link.element}
              onClick={() => scrollToElement(link)}
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
          {links.map(link => (
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
