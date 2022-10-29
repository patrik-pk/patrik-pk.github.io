import Header from './components/header/header.component'
import Navbar from './components/navbar/navbar.component'
import About from './components/about/about.component'
import Projects from './components/projects/projects.component'
import CodeShowcase from './components/code-showcase/code-showcase.component'

import './reset.scss'
import './style.scss'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Navbar />
      <About />
      <Projects />
      <CodeShowcase />
    </div>
  )
}

export default App
