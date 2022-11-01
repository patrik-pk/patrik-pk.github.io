import React, { useContext, useState, useRef, useEffect } from 'react'
import './about.style.scss'

import { LanguageContext } from '../../context/LanguageContext'

import SectionTitle from '../section-title/section-title.component'
import ProfileImg from '../../assets/profile.jpg'

const About = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const langContext = useContext(LanguageContext)
  const { dictionary } = langContext.lang

  const aboutRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      treshold: 1.0
    }

    const observer = new IntersectionObserver(entries => {
      const [entry] = entries

      if (entry.isIntersecting) {
        setIsVisible(entry.isIntersecting)
      }
    }, options)

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }
  }, [])

  return (
    <section className='about section' id='about'>
      <div className='container'>
        <SectionTitle content={dictionary.about.title} />
        <main
          className={`about-main ${isVisible ? 'visible' : ''}`}
          ref={aboutRef}
        >
          <div className='about-main-left'>
            <div className='aml-photo'>
              <img src={ProfileImg} alt='' />
            </div>
            <p className='aml-title title-medium'>
              {dictionary.about.left.title}
            </p>
            <p className='aml-text'>{dictionary.about.left.text}</p>
          </div>
          <div className='about-main-right'>
            <p className='amr-title title-medium'>
              {dictionary.about.right.title}
            </p>

            <ul className='amr-tech'>
              {dictionary.about.right.items.map((item: any) => (
                <li className='amr-tech-item' key={item.title}>
                  <p className='ati-title title-small'>{item.title}</p>

                  <ul className='ati-list'>
                    {item.subitems.map((subitem: any) => (
                      <li className='ati-list-item' key={subitem}>
                        {subitem}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </section>
  )
}

export default About
