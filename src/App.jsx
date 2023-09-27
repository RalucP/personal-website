import './App.css'
import Navbar from './components/Navbar'
import Introduction from './pages/Introduction'
import Projects from './pages/Projects'
import skillData from './data/position.json'
import projectData from './data/projects.json'

function App() {

  return (
    <>
      <Navbar />
      <Introduction 
        data={skillData} 
      />
      <Projects
        data={projectData}
      />
    </>
  )
}

export default App
