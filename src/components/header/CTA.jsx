import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Baixar CV</a>
          <a href="https://www.linkedin.com/in/danilo-oliveira-web/" target="_blank" className='btn btn-primary' rel="noreferrer">Contato</a>
    </div>
  )
}

export default CTA