import React, { useState } from 'react'
import Logo from './components/Logo'
import BackgroundEffect from './components/BackgroundEffect'
import { FaSun, FaMoon } from 'react-icons/fa'
import About from './components/About'
import Navigation from "./components/Navigation"

function App() {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <div className={`app-root ${theme}`}>
      <BackgroundEffect theme={theme} />
      <header>
          <Logo />
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
      </header>
      <div className="main-content">
        <Navigation />
        <main>
          <section id="about"><About /></section>
          {/* <section id="experience"><Experience /></section>
          <section id="projects"><Projects /></section> */}
        </main>
      </div>
    </div>
  )
}

export default App
