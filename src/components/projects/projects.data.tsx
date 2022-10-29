export interface ProjectInterface {
  name: string
  technologies: string
  type: 'commercial' | 'personal'
  date: string
  description?: string
  link?: string
  order: number
}

const projects: ProjectInterface[] = [
  {
    name: 'Reklamní potisk',
    technologies: 'Vue.js, Nuxt.js',
    type: 'commercial',
    date: '2022',
    link: 'https://reklamnipotisk.cz/',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate accusamus ut voluptatibus autem consequatur iusto aspernatur quae amet vero sit reprehenderit ipsam eius suscipit similique quidem quaerat, animi unde veritatis! t amet consectetur adipisicing elit. Voluptate accusamus ut voluptatibus autem consequatur iusto aspernatur quae amet vero sit reprehenderit ipsam eius suscipit similique quidem quaerat, an',
    order: 200
  },
  {
    name: 'Peko Shop',
    technologies: 'Vue.js, Nuxt.js',
    type: 'commercial',
    date: '2022',
    link: 'https://demo.peko-studio.cz',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    order: 160
  },
  {
    name: 'Pay.vip',
    technologies: 'Vue.js, Nuxt.js',
    type: 'commercial',
    date: '2022',
    link: 'https://facilite-media.cz/',
    order: 100
  },
  {
    name: 'GRM Systems',
    technologies: 'Wordpress',
    type: 'commercial',
    date: '2022',
    link: 'https://grm.peko-studio.cz/',
    order: 140
  },
  {
    name: 'Peko Studio Web',
    technologies: 'Wordpress',
    type: 'commercial',
    date: '2021 - 2022',
    link: 'https://peko-studio.cz/',
    order: 130
  },
  {
    name: 'Zelena zahrada',
    technologies: 'Vue.js, Nuxt.js',
    type: 'commercial',
    date: '2021',
    link: 'https://zelena-zahrada-5127.rostiapp.cz/',
    order: 90
  },
  {
    name: 'Simple RPG',
    technologies: 'React.js, Redux',
    type: 'personal',
    date: '2019 - 2020',
    link: 'https://simple-rpg-game.netlify.app/',
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
    link: 'https://patrikpk-portfolio.netlify.app/',
    order: 10
  }
]

export default projects.sort((a, b) => (a.order < b.order ? 1 : -1))
