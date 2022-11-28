import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Danilo Oliveira</a>

      <ul className='permalinks'>
        <li>
          <a href="#"> Inicio </a>
        </li>
        <li>
          <a href="#about"> Sobre </a>
        </li>
        <li>
          <a href="#experience"> Experiências </a>
          </li>
        <li>
          <a href="#services"> O que faço </a>
          </li>
        <li>
          <a href="#portfolio"> Portfolio </a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/danilo-oliveira-web/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/DaniloWA" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.instagram.com/danilo.oliveira_eu/" target="_blank" rel="noreferrer"><BsInstagram /></a>
      </div>

      <div className="footer__copyright" id='sdown'>
        <small>Feito com carinho por Danilo Oliveira </small>
      </div>
    </footer>
  )
}

export default Footer