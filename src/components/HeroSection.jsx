import React from 'react'
import "../styles/HeroSection.css"
import Menu from './Menu'

const HeroSection = () => {
  return (
    <div className='heroSection'>
        <Menu/>
        <div className='title'>
            <h1>Lorem ipsum dolor</h1>
        </div>
        <div className='logo'></div>
    </div>
  )
}

export default HeroSection