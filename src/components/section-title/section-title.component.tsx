import React, { useState, useRef, useEffect } from 'react'
import './section-title.style.scss'

interface SectionTitleProps {
  content: React.ReactNode | string
  className?: string
}

const SectionTitle = ({ content, className }: SectionTitleProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-20%',
      treshold: 1.0
    }

    const observer = new IntersectionObserver(entries => {
      const [entry] = entries

      if (entry.isIntersecting) {
        setIsVisible(entry.isIntersecting)
      }
    }, options)

    if (titleRef.current) {
      observer.observe(titleRef.current)
    }
  }, [])

  return (
    <div className='section-title-container' ref={titleRef}>
      <h3
        className={`section-title ${className || ''} ${
          isVisible ? 'visible' : ''
        }`}
      >
        {content}
      </h3>{' '}
      <div
        className={`section-title-underline ${isVisible ? 'visible' : ''}`}
      ></div>
    </div>
  )
}

export default SectionTitle
