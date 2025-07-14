import React, { useState } from 'react'
import Logo from './components/Logo'
import Story from './components/Story'
import BackgroundEffect from './components/BackgroundEffect'
import { FaSun, FaMoon } from 'react-icons/fa'
import './App.css'
import About from './components/About'
function App() {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <div className={`app-root ${theme}`}>
      <BackgroundEffect theme={theme} />
      <header className='header'>
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <FaSun /> : <FaMoon />}
      </button>
     
        <Logo />
      </header>
      <About />
      <Story />
    </div>
  )
}

export default App
