import React from 'react'
import About from '../About'
import Contact from '../Contact'
import Home from '../Home'
import Project from '../Project'
import Skills from '../Skills'
import './Main.scss'
function Main() {
  return (
      <div className='content'>
        <Home />
        <Project />
        <Skills />
        <About />
        <Contact />
      </div>
    

  )
}

export default Main