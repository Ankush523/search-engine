import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import SearchPage from './SearchPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/search" element={<SearchPage/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App