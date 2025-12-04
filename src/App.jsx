import { Routes, Route } from 'react-router-dom'
import Landing from '../pages/Landing' 
import AboutUs from '../pages/AboutUs'
import Achievements from '../pages/Achievements' 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/achievements" element={<Achievements />} />
    </Routes>
  )
}

export default App
