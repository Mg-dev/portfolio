
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import 'animate.css'
import Portfolio from './Portfolio'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import Contact from './pages/Contact'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (

      <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Project />} />
            <Route path="contact" element={<Contact />} />
        </Routes>
      </Router>
  )
}

export default App
