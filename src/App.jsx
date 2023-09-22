import './App.css'
import Navbar from './components/Navbar'
import Introduction from './pages/Introduction'
import skillData from './data/position.json'

function App() {

  return (
    <>
      <Navbar />
      <Introduction 
        data={skillData} 
      />
    </>
  )
}

export default App
