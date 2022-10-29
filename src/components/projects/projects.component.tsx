import React, { useState, useEffect, useRef } from 'react'
import './projects.style.scss'

import SectionTitle from '../section-title/section-title.component'
import Filter, { FilterOption, FilterOptions } from '../filter/filter.component'
import Project from '../project/project.component'

import projects from './projects.data'

const filterOptions: FilterOptions = [
  {
    label: 'Commercial',
    value: 'commercial'
  },
  {
    label: 'Personal',
    value: 'personal'
  }
]

const Projects = () => {
  const [selectedOption, setSelectedOption] = useState<FilterOption>(
    filterOptions[0]
  )

  const filteredProjects = projects.filter(
    project => project.type == selectedOption.value
  )

  return (
    <section className='projects section' id='projects'>
      <div className='container'>
        <SectionTitle content='Projects' />
        <main className='projects-main'>
          <Filter
            options={filterOptions}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
          <ul className='projects-list'>
            {filteredProjects.map(project => (
              <Project project={project} key={project.name} />
            ))}
          </ul>
        </main>
      </div>
    </section>
  )
}

export default Projects
