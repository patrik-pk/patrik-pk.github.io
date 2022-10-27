import React from 'react'
import './section-title.style.scss'

interface SectionTitleProps {
  content: React.ReactNode | string
  className?: string
}

const SectionTitle = ({ content, className }: SectionTitleProps) => {
  return (
    <>
      <h3 className={`section-title ${className || ''}`}>{content}</h3>{' '}
      <div className='section-title-underline'></div>
    </>
  )
}

export default SectionTitle
