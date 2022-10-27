export interface ProjectInterface {
  name: string
  technologies: string
  type: 'commercial' | 'personal'
  date: string
  description?: string
  link?: 'string'
  order: number
}

const projects: ProjectInterface[] = [
  {
    name: 'Reklamní potisk',
    technologies: 'Vue.js, Nuxt.js',
    type: 'commercial',
    date: '2022',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate accusamus ut voluptatibus autem consequatur iusto aspernatur quae amet vero sit reprehenderit ipsam eius suscipit similique quidem quaerat, animi unde veritatis! t amet consectetur adipisicing elit. Voluptate accusamus ut voluptatibus autem consequatur iusto aspernatur quae amet vero sit reprehenderit ipsam eius suscipit similique quidem quaerat, an',
    order: 200
  },
  {
    name: 'Peko Shop',
    technologies: 'Vue.js, Nuxt.js',
    type: 'commercial',
    date: '2022',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    order: 160
  },
  {
    name: 'Pay.me',
    technologies: 'Vue.js, Nuxt.js',
    type: 'commercial',
    date: '2022',
    order: 100
  },
  {
    name: 'GRM Systems',
    technologies: 'Wordpress',
    type: 'commercial',
    date: '2022',
    order: 140
  },
  {
    name: 'Peko Studio Web',
    technologies: 'Wordpress',
    type: 'commercial',
    date: '2021 - 2022',
    order: 130
  },
  {
    name: 'Zelena zahrada',
    technologies: 'Vue.js, Nuxt.js',
    type: 'commercial',
    date: '2021',
    order: 90
  },
  {
    name: 'Simple RPG',
    technologies: 'React.js, Redux',
    type: 'personal',
    date: '2019 - 2020',
    order: 70
  },
  {
    name: 'Portfolio',
    technologies: 'React.js',
    type: 'personal',
    date: '2022',
    order: 80
  },
  {
    name: 'Ženich a nevěsta',
    technologies: 'HTML5, CSS3, jQuery',
    type: 'personal',
    date: '2018',
    order: 10
  }
]

export default projects.sort((a, b) => (a.order < b.order ? 1 : -1))
