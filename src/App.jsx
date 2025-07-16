import React, { useState } from 'react'
import Logo from './components/Logo'
import BackgroundEffect from './components/BackgroundEffect'
import { FaSun, FaMoon } from 'react-icons/fa'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import FloatingAiChat from './components/FloatingAiChat'

function App() {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
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
}

export default App
