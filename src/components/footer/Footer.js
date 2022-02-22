import React from 'react'
import LinkedinPng from "../../images/linkedinPng.png"
import GithubPng from "../../images/githubPng.png"
import "./footer.scss"

const Footer = () => {
  return (
    <>
    <div className='footer'>
      <a href="https://www.linkedin.com/in/franco-alvarez-64b4471a1/" target="_blank" rel="noreferrer">
          <img src={LinkedinPng} alt='' className='footerIcon'/>
      </a>
      <a href="https://github.com/FrancoAlvarezKyrio" target="_blank" rel="noreferrer">
          <img src={GithubPng} alt='' className='footerIcon'/>  
      </a>
    </div>
    
    <div className='footerText'>
        <p>Copyright 2022 - Kyrio's dreams factory</p>
    </div>
    </>
  )
}

export default Footer