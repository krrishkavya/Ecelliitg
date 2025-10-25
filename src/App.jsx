import { Routes, Route } from 'react-router-dom'
import Landing from '../pages/Landing' 
import AboutUs from '../pages/AboutUs' 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  )
}

export default App