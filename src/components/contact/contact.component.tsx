import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './contact.style.scss'

import SectionTitle from '../section-title/section-title.component'
import Button from '../button/button.component'
import Spinner from '../spinner/spinner.component'

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [formStatus, setFormStatus] = useState<'success' | 'error' | null>(null)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!formRef.current || loading) {
      return
    }

    e.preventDefault()
    setLoading(true)
    setFormStatus(null)

    emailjs
      .sendForm(
        'service_1ngpdqs',
        'template_uvfvkja',
        formRef.current,
        'bh5Vv9Fi0k4CDFIDd'
      )
      .then(r => {
        console.log('contact form success', r)

        if (formRef.current) {
          formRef.current.reset()
        }

        setLoading(false)
        setFormStatus('success')
      })
      .catch(e => {
        console.log('contact form error', e)
        setLoading(false)
        setFormStatus('error')
      })

    // setFormData(initialFormData)
  }

  return (
    <section className='contact section' id='contact'>
      <div className='contact-clip'></div>

      <div className='container'>
        <SectionTitle content='Contact' />
        <main className='contact-main'>
          <p className='contact-main-text'>
            You can contact me using the form below <br /> or with e-mail on the
            footer
          </p>

          <form
            className='contact-main-form'
            onSubmit={e => onSubmit(e)}
            ref={formRef}
          >
            {loading && <Spinner />}

            <input
              className='contact-main-form-input'
              // value={formData.name}
              type='text'
              name='name'
              placeholder='Name'
              required
              // onChange={handleChange}
            />
            <input
              className='contact-main-form-input'
              type='email'
              name='email'
              placeholder='E-mail'
              required
            />
            <textarea
              className='contact-main-form-textarea'
              name='message'
              placeholder='Your message'
              required
            />

            <Button
              className={'contact-main-form-submit'}
              content={'Submit'}
              type='submit'
            />
          </form>

          <p className={`contact-main-result ${formStatus ? 'active' : ''}`}>
            {formStatus
              ? formStatus == 'success'
                ? 'E-mail successfully sent'
                : 'Failed to send e-mail'
              : ''}
          </p>
        </main>
      </div>
    </section>
  )
}

export default Contact
