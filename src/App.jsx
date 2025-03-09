import React from 'react'
import "./App.css"
import HeroSection from './components/HeroSection'
import Menu from './components/Menu'
import AboutSection from './components/AboutSection'
import InteractiveMap from './components/InteractiveMap'
import FormSection from './components/FormSection'

const App = () => {
  return (
    <div>
      <Menu/>
      <HeroSection/>
      <AboutSection/>
      <InteractiveMap/>
      <FormSection/>
    </div>
  )
}

export default App