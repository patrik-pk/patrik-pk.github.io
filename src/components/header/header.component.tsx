import React, { useContext } from 'react'
import './header.style.scss'

import Button from '../button/button.component'
import { LanguageContext } from '../../context/LanguageContext'

import languages from '../../lang/languages'

const Header = () => {
  const scrollToAbout = (): void => {
    const element: HTMLElement | null = document.querySelector('#about')

    if (!element) {
      return
    }

    element.scrollIntoView()
  }

  const langContext = useContext(LanguageContext)
  const { dictionary } = langContext.lang

  return (
    <header className='header' id='home'>
      <div className='header-language'>
        <div
          className={`header-language-item ${
            langContext.lang.type == 'cs' ? 'active' : ''
          }`}
          onClick={() =>
            langContext.setLang({
              type: 'cs',
              dictionary: languages.cs
            })
          }
          tabIndex={0}
        >
          {dictionary.header.lang.cs}
        </div>
        <div
          className={`header-language-item ${
            langContext.lang.type == 'en' ? 'active' : ''
          }`}
          onClick={() =>
            langContext.setLang({
              type: 'en',
              dictionary: languages.en
            })
          }
          tabIndex={0}
        >
          {dictionary.header.lang.en}
        </div>
      </div>

      <div className='header-content'>
        <h1 className='header-content-name'>{dictionary.header.name}</h1>
        <h2 className='header-content-role'>{dictionary.header.role}</h2>
        <Button
          className={'header-content-btn'}
          content={dictionary.header.button}
          handleClick={scrollToAbout}
        />
      </div>
    </header>
  )
}

export default Header
