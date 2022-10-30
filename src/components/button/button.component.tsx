import React from 'react'
import './button.style.scss'

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  content: React.ReactNode | string
  className?: string
  handleClick?: () => void
}

const Button = ({ content, className, handleClick, type }: ButtonProps) => {
  return (
    <button
      type={type ? type : 'button'}
      className={`button ${className}`}
      onClick={handleClick}
      // tabIndex={0}
    >
      {content}
    </button>
  )
}

export default Button
