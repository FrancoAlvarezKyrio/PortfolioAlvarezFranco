import React from 'react'
import "./intro.scss"
import ImageIntro from "../../images/firstImage.png"

const Intro = () => {
  return (
    <div className='intro'>
        <div className='introLeft'>
           <div className='introLeftWrapper'>
                    <h2 className='introText'>Hola, mi nombre es</h2>
                    <h1 className='introName'>Franco Alvarez</h1>
                <div className='introTitle'>
                    <div className='introTitleWrapper'>
                        <div className='introTitleItem'>Desarrollador</div>
                        <div className='introTitleItem'>Diseñador</div>
                        <div className='introTitleItem'>Administrador</div>
                        <div className='introTitleItem'>Capacitador</div>
                        <div className='introTitleItem'>Comunicador</div>
                    </div>
                </div>
                            <p className='introDescrip'>
                            Soy desarrollador web Frontend especializado en ReactJs con conocimientos en Diseño UX/UI.<br/>
                            En este portfolio podrán conocer más a cerca de mi, visualizar mis proyectos personales y entrar en contacto conmigo.<br/><br/>
                            <span className='bienvenidos'>Bienvenidos.</span>
                            </p>
           </div>     
        </div>

        <div className='introRight'>
            <div className='introClipPath'></div>
            <img src={ImageIntro} alt='' className='introImage' />
        </div>

    </div>
  )
}

export default Intro