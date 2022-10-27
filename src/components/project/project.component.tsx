import React, { useRef } from 'react'
import './project.style.scss'

import { ProjectInterface } from '../projects/projects.data'
import ProfileImg from '../../assets/profile.jpg'

interface ProjectProps {
  project: ProjectInterface
}

const Project = ({ project }: ProjectProps) => {
  const contentRef = useRef<HTMLHeadingElement>(null)

  const handleMouseLeave = (e: any) => {
    if (!contentRef.current) {
      return
    }

    contentRef.current.scrollTo(0, 0)
  }

  return (
    <li className='project-list-item' onMouseLeave={e => handleMouseLeave(e)}>
      <div className='pli-img'>
        <img src={ProfileImg} alt={project.name} />
      </div>

      <div className='pli-content' ref={contentRef}>
        <p className='pli-content-technologies'>{project.technologies}</p>
        <h4 className='pli-content-name'>{project.name}</h4>
        {project.description && (
          <p className='pli-content-description'>{project.description}</p>
        )}
      </div>

      <footer className='pli-footer'>
        <p className='pli-footer-left'>{`${
          project.type == 'commercial' ? 'Komerční' : 'Osobní'
        } projekt, ${project.date}`}</p>
      </footer>
    </li>
  )
}

export default Project
