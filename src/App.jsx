import React from 'react'
import "./App.css"
import HeroSection from './components/HeroSection'
import Menu from './components/Menu'
import AboutSection from './components/AboutSection'

const App = () => {
  return (
    <div>
      <Menu/>
      <HeroSection/>
      <AboutSection/>
    </div>
  )
}

export default App