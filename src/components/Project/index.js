import React from 'react'
import './Project.scss'
import ProjectCard from '../ProjectCard'
import {Projects} from '../../data.js'
import '../../media/zelda.gif'
function Project() {
  return (
    <div className='project'  id="project">
      <h1 className='project__title'>Projects</h1>
      <div className='project__container'>
      {Projects.map((project) => {
        return <ProjectCard {...project} />
      })}
      </div>
    </div>
  )
}

export default Project