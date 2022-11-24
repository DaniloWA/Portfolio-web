import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'


const Services = () => {
  return (
    <section id='services'>
      <h5>O que tenho a oferecer</h5>
      <h2>Me conhecendo</h2>

      <div className="container services__container">
        <articles className="service">
          <div className="service__head">
            <h3>Soft skills</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Trabalho em equipe.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Proatividade.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Flexibilidade E Resiliência.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Comprometimento.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Disciplina.</p>
            </li>
          </ul>
        </articles>
        <articles className="service">
          <div className="service__head">
            <h3>Hard skills</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Gerenciamento de versionamento.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>clean code.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>MVC.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>POO.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>PHP SOLID.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>API Restfull</p>
            </li>
          </ul>
        </articles>
        <articles className="service">
          <div className="service__head">
            <h3>Metodologias de trabalho</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Agile.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Scrum.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Kanban.</p>
            </li>
          </ul>
        </articles>
      </div>
    </section>
  )
}

export default Services