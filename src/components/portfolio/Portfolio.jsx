import React from 'react'
import './portfolio.css'
import IMG4 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG1 from '../../assets/Terminal.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Terminal JS project',
    github: 'https://github.com/DaniloWA/terminal-3.0',
    demo: 'https://terminal.daniloo.dev/',
    
  },
  {
    id: 2,
    image: IMG4,
    title: 'Api Gestão universidade',
    github: 'https://github.com/DaniloWA/backEndFlag-app',
    demo: 'https://github.com/DaniloWA/backEndFlag-app',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Jogo da Velha',
    github: 'https://github.com/DaniloWA/Jogo-da-velha',
    demo: 'https://github.com/DaniloWA/Jogo-da-velha',
  },

  {
    id: 4,
    image: IMG2,
    title: 'Store website project',
    github: 'https://github.com/DaniloWA/FrontEndFlag',
    demo: 'https://github.com/DaniloWA/FrontEndFlag',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Bloco de notas',
    github: 'https://github.com/DaniloWA/bloco-notas',
    demo: 'https://github.com/DaniloWA/bloco-notas',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Api feita com NODE',
    github: 'https://github.com/DaniloWA/node-api-flag',
    demo: 'https://github.com/DaniloWA/node-api-flag',
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Meus Trabalhos Recentes</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({id,image,title,github,demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio