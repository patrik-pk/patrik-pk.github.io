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

    // BUG: Unhovering project causes nav link/button scroll to get stuck
    // contentRef.current.scrollTo(0, 0)
  }

  return (
    <li
      className='project-list-item'
      onMouseLeave={e => handleMouseLeave(e)}
      tabIndex={0}
    >
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

        {project.link && (
          <a className='pli-footer-right' href={project.link} target='_blank'>
            Show live
          </a>
        )}
      </footer>
    </li>
  )
}

export default Project
