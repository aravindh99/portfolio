import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Logo from './components/Logo'
import BackgroundEffect from './components/BackgroundEffect'
import { FaSun, FaMoon } from 'react-icons/fa'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import FloatingAiChat from './components/FloatingAiChat'
import NotFound from './components/NotFound'

function App() {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  useEffect(() => {
    
    console.log('%c🎉 Welcome to my portfolio! 🎉', 'color: #f8efd4; font-size: 20px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);');
    console.log('%c👋 Hey there, curious developer!', 'color: #646cff; font-size: 16px; font-weight: bold;');
    console.log('%c📧 Feel free to reach out!', 'color: #f8efd4; font-size: 14px; font-weight: bold;');
    console.log('%c✨ Hire me! ✨', 'color: #646cff; font-size: 16px; font-weight: bold;');
  }, [])

  const HomePage = () => (
    <div className={`app-root ${theme}`}>
      <BackgroundEffect theme={theme} />
      <div className="fixed-header">
        <Logo />
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
        </div>
        <div className="main-content">
        <main>
       
            <About />
         
            <Skills />
          
            <Experience />
         
            <Projects />
        </main>
        <FloatingAiChat />
      </div>
    </div>
  )

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
