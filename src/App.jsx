import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Loading from './Pages/loading'
import Navbar from './components/Navbar'
import About from './Pages/about'
import Conffessions from './Pages/confessions'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {!isLoading && <Navbar />}
        <Routes>
          <Route path="/" element={<Loading onLoadingComplete={() => setIsLoading(false)} />} />
          {/* Add other routes as they are created */}
          <Route path="/about" element={<div className="p-4"><About></About></div>} />
          <Route path="/confessions" element={<div className="p-4"><Conffessions/></div>} />
          <Route path="/gifts" element={<div className="p-4">Gifts Page (Coming Soon)</div>} />
          <Route path="/footer" element={<div className="p-4">Footer Page (Coming Soon)</div>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
