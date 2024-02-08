import './App.scss'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Projects from './components/projects/Projects'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App
