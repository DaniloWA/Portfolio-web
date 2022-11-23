import React from 'react'
import './testimonials.css'
import IMG1 from '../../assets/slack.png'
import IMG2 from '../../assets/jira.png'
import IMG3 from '../../assets/figma.png'
import IMG4 from '../../assets/vscode.png'
import IMG5 from '../../assets/mysql.png'
import IMG6 from '../../assets/dbeaver.png'
import IMG7 from '../../assets/postman.png'

import { Swiper, SwiperSlide, Pagination } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: IMG1,
    name: 'Slack',
    review: 'O Slack é um programa de mensagens instantâneas.'
  },
  {
    avatar: IMG2,
    name: 'Jira',
    review: 'É uma ferramenta que permite o monitoramento de tarefas e acompanhamento de projetos garantindo o gerenciamento de todas as suas atividades em único lugar.'
  },
  {
    avatar: IMG3,
    name: 'Figma',
    review: 'Figma é um editor gráfico de vetor e prototipagem de projetos de design baseado principalmente no navegador web.'
  },
  {
    avatar: IMG4,
    name: 'Visual Studio Code',
    review: 'É um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS. Ele inclui suporte para depuração, controle de versionamento Git incorporado.'
  },
  {
    avatar: IMG5,
    name: 'MySQL Workbench',
    review: 'É uma ferramenta de design de banco de dados visual que integra desenvolvimento SQL, administração, design de banco de dados, criação e manutenção.'
  },
  {
    avatar: IMG6,
    name: 'DBeaver',
    review: 'DBeaver é um aplicativo de software cliente SQL e uma ferramenta de administração de banco de dados.'
  },
  {
    avatar: IMG7,
    name: 'Postman',
    review: 'Postman é uma plataforma de API para desenvolvedores projetar, construir, testar e iterar suas APIs.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Com o que trabalho</h5>
      <h2>Ferramentas de trabalho </h2>
      <Swiper 
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        speed={500}
        spaceBetween={40}
        slidesPerView={1}
        loop={true}
        className="container testimonials__container"
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar one" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials