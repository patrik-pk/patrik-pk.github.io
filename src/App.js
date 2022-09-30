import Navbar from './components/navbar/navbar.component'
import About from './components/about/about.component'
import Projects from './components/projects/projects.component'

import './reset.scss'
import './style.scss'

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <Navbar />
        <About />
        <Projects />
      </div>
    </div>
  )
}

export default App
