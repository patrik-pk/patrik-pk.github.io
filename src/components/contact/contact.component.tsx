import React, { useState, useRef, useContext, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import './contact.style.scss'

import { LanguageContext } from '../../context/LanguageContext'

import SectionTitle from '../section-title/section-title.component'
import Button from '../button/button.component'
import Spinner from '../spinner/spinner.component'

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const [loading, setLoading] = useState<boolean>(false)
  const [formStatus, setFormStatus] = useState<'success' | 'error' | null>(null)
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const langContext = useContext(LanguageContext)
  const { dictionary } = langContext.lang

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
  }

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

    if (contactRef.current) {
      observer.observe(contactRef.current)
    }
  }, [])

  return (
    <section className='contact section' id='contact'>
      <div className='contact-clip'></div>

      <div className='container'>
        <SectionTitle content={dictionary.contact.title} />
        <main
          className={`contact-main ${isVisible ? 'visible' : ''}`}
          ref={contactRef}
        >
          <p
            className='contact-main-text'
            dangerouslySetInnerHTML={{ __html: dictionary.contact.text }}
          ></p>

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
              placeholder={dictionary.contact.inputPlaceholders.name}
              required
              // onChange={handleChange}
            />
            <input
              className='contact-main-form-input'
              type='email'
              name='email'
              placeholder={dictionary.contact.inputPlaceholders.email}
              required
            />
            <textarea
              className='contact-main-form-textarea'
              name='message'
              placeholder={dictionary.contact.inputPlaceholders.message}
              required
            />

            <Button
              className={'contact-main-form-submit'}
              content={dictionary.contact.submit}
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
