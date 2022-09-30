import React from 'react'

import './about.style.scss'

const About = () => {
    return (
        <section className='about'>
            <div className='about-left'>
                <h1 className='about-left-name'>Test User</h1>
                <h2 className='about-left-subtitle'>Frontend Developer</h2>
                <p className='about-left-text'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.
                </p>
            </div>
            <div className='about-right'></div>
        </section>
    )
}

export default About