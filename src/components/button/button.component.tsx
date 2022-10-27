import React from 'react'
import './button.style.scss'

interface ButtonProps {
  content: React.ReactNode | string
  className?: string
  handleClick?: () => void
}

const Button = ({ content, className, handleClick }: ButtonProps) => {
  return (
    <button className={`button ${className}`} onClick={handleClick}>
      {content}
    </button>
  )
}

export default Button
