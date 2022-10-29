import React from 'react'
import './contact.style.scss'

import SectionTitle from '../section-title/section-title.component'

const Contact = () => {
  return (
    <section className='contact section' id='contact'>
      <div className='container'>
        <SectionTitle content='Contact' />
        <main className='contact-main'>
          <p className='contact-main-text'>
            You can contact me using the form below or with e-mail on the footer
          </p>
        </main>
      </div>
    </section>
  )
}

export default Contact
