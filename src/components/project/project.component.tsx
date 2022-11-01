import React, { useRef, useContext, useState, useEffect } from 'react'
import './project.style.scss'

import { LanguageContext } from '../../context/LanguageContext'

import ProfileImg from '../../assets/profile.jpg'

export interface ProjectInterface {
  name: string
  technologies: string
  type: string
  date: string
  description?: string
  link?: string
  github?: string
  order: number
  img: string
}

interface ProjectProps {
  project: ProjectInterface
}

const Project = ({ project }: ProjectProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const projectRef = useRef<HTMLLIElement>(null)
  const contentRef = useRef<HTMLHeadingElement>(null)

  const langContext = useContext(LanguageContext)
  const { dictionary } = langContext.lang

  const handleMouseLeave = (e: any) => {
    if (!contentRef.current) {
      return
    }

    // BUG: Unhovering project causes nav link/button scroll to get stuck
    // contentRef.current.scrollTo(0, 0)
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      treshold: 1.0
    }

    const observer = new IntersectionObserver(entries => {
      const [entry] = entries

      if (entry.isIntersecting) {
        setIsVisible(entry.isIntersecting)
      }
    }, options)

    if (projectRef.current) {
      observer.observe(projectRef.current)
    }
  }, [])

  return (
    <li
      className={`project-list-item ${isVisible ? 'visible' : ''}`}
      onMouseLeave={e => handleMouseLeave(e)}
      tabIndex={0}
      ref={projectRef}
    >
      <div className='pli-img'>
        {project.img && (
          <img
            src={require(`../../assets/projects/${project.img}`)}
            alt={project.name}
            loading='lazy'
          />
        )}
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
          project.type == 'commercial'
            ? dictionary.projects.commercial
            : dictionary.projects.personal
        }, ${project.date}`}</p>

        <div className='pli-footer-right'>
          {project.github && (
            <a href={project.github} target='_blank'>
              {dictionary.projects.github}
            </a>
          )}

          {project.link && (
            <a href={project.link} target='_blank'>
              {dictionary.projects.showLive}
            </a>
          )}
        </div>
      </footer>
    </li>
  )
}

export default Project
