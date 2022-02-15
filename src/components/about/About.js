import React from 'react'
import "./about.scss"
import ImageAbout from "../../images/imageBlackAndWhite.jpg"
import ImageAward from "../../images/AwardImage.jpg"

const About = () => {
  return (
    <div className='about'>
        <div className='aboutLeft'>
            <div className='aboutCard bg '></div>
            <div className='aboutCard'>
                <img src={ImageAbout} className='aboutImage'/>
            </div>
        </div>
        <div className='aboutRight'>
            <h1 className='aboutTitle'>Sobre mi</h1>
            <p className='aboutSub'>
                    Kyrio Alvarez Urrutia - 18 meses - 10/08/21 - 17:47hrs
                    Kyrio Alvarez Urrutia - 18 meses - 10/08/21 - 17:47hrs
                    Kyrio Alvarez Urrutia - 18 meses - 10/08/21 - 17:47hrs
            </p>
            <p className='aboutDescrip'>
                    Kyrio Alvarez Urrutia - 18 meses - 10/08/21 - 17:47hrs
                    Kyrio Alvarez Urrutia - 18 meses - 10/08/21 - 17:47hrs
                    Kyrio Alvarez Urrutia - 18 meses - 10/08/21 - 17:47hrs
                    Kyrio Alvarez Urrutia - 18 meses - 10/08/21 - 17:47hrs
                    Kyrio Alvarez Urrutia - 18 meses - 10/08/21 - 17:47hrs
                    Kyrio Alvarez Urrutia - 18 meses - 10/08/21 - 17:47hrs
            </p>
            <div className='aboutAward'>
                <img src={ImageAward} className='aboutAwardImage'/>
                <div className='awardTexts'>
                    <h4 className='awardTitle'>Kyrio Alvarez Urrutia </h4>
                    <p className='awardDescrip'>Kyrio Alvarez Urrutia - 18 meses - 10/08/21 - 17:47hrs</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About