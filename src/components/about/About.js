import React from 'react'
import "./about.scss"
import ImageAbout from "../../images/imageBlackAndWhite.jpg"

const About = () => {
  return (
    <div className='about'>
        <div className='aboutLeft'>
            <div className='aboutCard bg '></div>
            <div className='aboutCard'>
                <img src={ImageAbout} className='aboutImage'/>
            </div>
        </div>
        <div className='aboutRight'>Right</div>
    </div>
  )
}

export default About