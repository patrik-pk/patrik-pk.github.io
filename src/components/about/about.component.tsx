import React from 'react'
import './about.style.scss'

import SectionTitle from '../section-title/section-title.component'
import ProfileImg from '../../assets/profile.jpg'

const About = () => {
  return (
    <section className='about section' id='about'>
      <div className='container'>
        <SectionTitle content='About' />
        <main className='about-main'>
          <div className='about-main-left'>
            <div className='aml-photo'>
              <img src={ProfileImg} alt='' />
            </div>
            <p className='aml-title title-medium'>Who am I?</p>
            <p className='aml-text'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic quam
              aspernatur beatae magni libero ad in incidunt velit consectetur
              ratione?
            </p>
          </div>
          <div className='about-main-right'>
            <p className='amr-title title-medium'>Tech Stack</p>

            <ul className='amr-tech'>
              <li className='amr-tech-item'>
                <p className='ati-title title-small'>Frontend</p>

                <ul className='ati-list'>
                  <li className='ati-list-item'>
                    HTML5, CSS3, JavaScript (ES6)
                  </li>
                  <li className='ati-list-item'>React.js, Redux, Next.js</li>
                  <li className='ati-list-item'>Vue.js, Nuxt.js</li>
                  <li className='ati-list-item'>Typescript</li>
                </ul>
              </li>

              <li className='amr-tech-item'>
                <p className='ati-title title-small'>Backend</p>

                <ul className='ati-list'>
                  <li className='ati-list-item'>Node.js, Express</li>
                  <li className='ati-list-item'>MongoDB</li>
                  <li className='ati-list-item'>Typescript</li>
                </ul>
              </li>

              <li className='amr-tech-item'>
                <p className='ati-title title-small'>Other</p>

                <ul className='ati-list'>
                  <li className='ati-list-item'>git</li>
                  <li className='ati-list-item'>GitHub, Bitbucket</li>
                  <li className='ati-list-item'>Figma</li>
                </ul>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </section>
  )
}

export default About
