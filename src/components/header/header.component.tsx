import React from 'react'
import './header.style.scss'

import Button from '../button/button.component'

const Header = () => {
  const scrollToAbout = (): void => {
    const element: HTMLElement | null = document.querySelector('#about')

    if (!element) {
      return
    }

    element.scrollIntoView()
  }

  return (
    <header className='header' id='home'>
      <div className='header-content'>
        <h1 className='header-content-name'>Patrik Pukanec</h1>
        <h2 className='header-content-role'>Web Developer</h2>
        <Button
          className={'header-content-btn'}
          content={'View My Work'}
          handleClick={scrollToAbout}
        />
      </div>
    </header>
  )
}

export default Header
