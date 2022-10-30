import React, { createContext } from 'react'

import Header from './components/header/header.component'
import Navbar from './components/navbar/navbar.component'
import About from './components/about/about.component'
import Projects from './components/projects/projects.component'
import CodeShowcase from './components/code-showcase/code-showcase.component'
import Contact from './components/contact/contact.component'
import Footer from './components/footer/footer.component'

import './reset.scss'
import './style.scss'

// TODO: setup simple context

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
      {/* <CodeShowcase /> */}
    </div>
  )
}

export default App
