import React from 'react'
import './code-showcase.style.scss'

import SectionTitle from '../section-title/section-title.component'

const CodeShowcase = () => {
  return (
    <section className='code-showcase section' id='code'>
      <div className='container'>
        <SectionTitle content='Code showcase' />
        <main className='code-showcase-main'>content</main>
      </div>
    </section>
  )
}

export default CodeShowcase
