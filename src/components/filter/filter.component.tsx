import React from 'react'
import './filter.style.scss'

export interface FilterOption {
  label: string
  value: string
}

// Options are required to have atleast one element
export type FilterOptions = [FilterOption, ...FilterOption[]]

interface FilterProps {
  options: FilterOptions
  selectedOption: FilterOption
  setSelectedOption: (option: FilterOption) => void
}

const Filter = ({
  options,
  selectedOption,
  setSelectedOption
}: FilterProps) => {
  return (
    <div className='projects-main-filter filter'>
      <ul className='filter-options'>
        {options.map(opt => (
          <li
            key={opt.value}
            onClick={() => setSelectedOption(opt)}
            className={`filter-options-item ${opt.value ==
              selectedOption.value && 'selected'}`}
          >
            {opt.value}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Filter
