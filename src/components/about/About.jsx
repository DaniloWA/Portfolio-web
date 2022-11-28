import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Me conhecendo</h5>
      <h2>Sobre Mim</h2>

      <div className='container about__container'>
        <div className="about__me">
          <img className='about__me-image' src={ME} alt="img" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experiência</h5>
              <small>+365 Dias trabalhados</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Tecnologias</h5>
              <small>+8 Trabalhadas</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Frameworks</h5>
              <small>+4 Trabalhados</small>
            </article>
          </div>
          <p>
            Eu sou Danilo Oliveira, um Full Stack Developer na grande maior parte do meu dia, no restante do tempo sou um
            estudante de desenvolvimento web.
            Acredito que aprender é a maior virtude humana e a vivo através do meu trabalho, quando percebi, estava
            apaixonado pelo Laravel e como toda paixão, todo meu tempo é dedicado a aprender cada vez mais sobre essa
            tecnologia e comunidade.
            Adoro o que faço e faço-o com todo o meu empenho e responsabilidade ao máximo, porque o que me move é um
            grande desafio na minha frente.
            Aguardo novos desafios e novos projetos para trabalhar, e claro, pessoas incríveis para trabalhar!
          </p>

          <a href="https://www.linkedin.com/in/danilo-oliveira-web/" target="_blank" className='btn btn-primary' rel="noreferrer">Contato</a>
        </div>
      </div>
    </section>
  )
}

export default About