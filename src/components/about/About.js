import React from 'react'
import "./about.scss"
import ImageAbout from "../../images/imageBlackAndWhite.jpg"
import ImageHtml from "../../images/htmlPng.png"
import ImageCss from "../../images/cssPng.png"
import ImageJS from "../../images/javaScriptPng.png"
import ImageReact from "../../images/reactJSPng.png"
import ImageSass from "../../images/sassPng.png"

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
                <img src={ImageHtml} className='aboutAwardImage'/>
                <img src={ImageCss} className='aboutAwardImage'/>
                <img src={ImageSass} className='aboutAwardImage'/>
                <img src={ImageJS} className='aboutAwardImage'/>
                <img src={ImageReact} className='aboutAwardImage'/>
                <img src={ImageCss} className='aboutAwardImage'/>
                <img src={ImageHtml} className='aboutAwardImage'/>
                <img src={ImageCss} className='aboutAwardImage'/>
                <img src={ImageHtml} className='aboutAwardImage'/>
                <img src={ImageCss} className='aboutAwardImage'/>

            </div>
        </div>
    </div>
  )
}

export default About