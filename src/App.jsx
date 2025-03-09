import React from 'react'
import "./App.css"
import HeroSection from './components/HeroSection'
import Menu from './components/Menu'
import AboutSection from './components/AboutSection'
import InteractiveMap from './components/InteractiveMap'

const App = () => {
  return (
    <div>
      <Menu/>
      <HeroSection/>
      <AboutSection/>
      <InteractiveMap/>
    </div>
  )
}

export default App