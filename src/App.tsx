import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Contact from './components/Contact'
import Login from './components/Login'
import { useRef} from 'react'
import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {
  const introRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  return (
    <div className="bg-surface min-h-screen w-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <div>
              <NavBar refs={{ introRef, workRef, contactRef }} />
              <Hero />
              <Intro refs={{ introRef, workRef, contactRef }} />
              <Contact refs={{ introRef, workRef, contactRef }} />
            </div>
          } />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App