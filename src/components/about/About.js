import React from 'react'
import "./about.scss"
import ImageAbout from "../../images/imageBlackAndWhite.jpg"
import ImageHtml from "../../images/htmlPng.png"
import ImageCss from "../../images/cssPng.png"
import ImageJS from "../../images/javaScriptPng.png"
import ImageReact from "../../images/reactJSPng.png"
import ImageSass from "../../images/sassPng.png"
import ImageGit from "../../images/gitPng.png"
import ImageNpm from "../../images/npmPng.png"
import ImageBootstrap from "../../images/bootstrapPng1.png"
import ImageIllustrator from "../../images/illustratorPng.png"
import ImagePhotoshop from "../../images/photoshopPng.png"

const About = () => {
  return (
    <div className='about'>
        <div className='aboutLeft'>
            <div className='aboutCard'>
                <img src={ImageAbout} className='aboutImage'/>
            </div>
        </div>
        <div className='aboutRight'>
            <h1 className='aboutTitle'>A cerca de mi</h1>
            <p className='aboutDescrip'>
                    Desde pequeño me sentí atraído por el mundo de la tecnología. <br/>
                     Gracias al estudio de la programación desarrollé cualidades como tolerancia a la frustración, 
                    constancia y perseverancia. <br/> Realicé trabajos administrativos, de diseño y de capacitación
                    utilizando las herramientas adiquiridas durante el transcurso de convertirme en un desarrollador Frontend. <br/>
                    Tengo la meta de seguir aprendiendo todos los días y convertirme en un profesional dedicado y responsable 
                    que pueda afrontar y superar los retos que vendrán.
            </p>
            <div className='aboutSkills'>
            <h1 className='aboutSub'>
                     Skills
            </h1>
                <img src={ImageHtml} className='aboutSkillsImage'/>
                <img src={ImageCss} className='aboutSkillsImage'/>
                <img src={ImageSass} className='aboutSkillsImage'/>
                <img src={ImageJS} className='aboutSkillsImage'/>
                <img src={ImageReact} className='aboutSkillsImage'/>
                <img src={ImageGit} className='aboutSkillsImage'/>
                <img src={ImageNpm} className='aboutSkillsImage'/>
                <img src={ImageBootstrap} className='aboutSkillsImage'/>
                <img src={ImageIllustrator} className='aboutSkillsImage'/>
                <img src={ImagePhotoshop} className='aboutSkillsImage'/>

            </div>
        </div>
    </div>
  )
}

export default About