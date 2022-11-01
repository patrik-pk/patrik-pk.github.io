import React, { useState, useContext, useRef, useEffect } from 'react'
import './projects.style.scss'

import SectionTitle from '../section-title/section-title.component'
import Filter, { FilterOption, FilterOptions } from '../filter/filter.component'
import Project from '../project/project.component'

import { LanguageContext } from '../../context/LanguageContext'

import { ProjectInterface } from '../project/project.component'

const Projects = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const langContext = useContext(LanguageContext)
  const projectsRef = useRef<HTMLUListElement>(null)
  const { dictionary } = langContext.lang

  const filterOptions: FilterOptions = [
    {
      label: dictionary.projects.filter.commercial,
      value: 'commercial'
    },
    {
      label: dictionary.projects.filter.personal,
      value: 'personal'
    }
  ]

  const [selectedOption, setSelectedOption] = useState<FilterOption>(
    filterOptions[0]
  )

  const filteredProjects = dictionary.projects.items.filter(
    (project: ProjectInterface) => project.type == selectedOption.value
  )

  useEffect(() => {
    console.log('select option')
  }, [setSelectedOption])

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

    if (projectsRef.current) {
      observer.observe(projectsRef.current)
    }
  }, [])

  return (
    <section className='projects section' id='projects'>
      <div className='container'>
        <SectionTitle content={dictionary.projects.title} />
        <main className='projects-main'>
          <Filter
            options={filterOptions}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
          <ul
            className={`projects-list ${isVisible ? 'visible' : ''}`}
            ref={projectsRef}
          >
            {filteredProjects.map((project: ProjectInterface) => (
              <Project project={project} key={project.name} />
            ))}
          </ul>
        </main>
      </div>
    </section>
  )
}

export default Projects
