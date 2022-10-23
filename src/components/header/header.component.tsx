import React from 'react'
import './header.style.scss'

import Button from '../button/button.component'

const Header = () => {
  const test = 'test'

  return (
    <header className='header'>
      <div className='header-content'>
        <h1 className='header-content-name'>Patrik Pukanec</h1>
        <h2 className='header-content-role'>Web Developer</h2>
        <Button className={'header-content-btn'} content={'View My Work'} />
      </div>
    </header>
  )
}

export default Header
