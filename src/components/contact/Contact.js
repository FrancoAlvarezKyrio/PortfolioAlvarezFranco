import React, { useRef, useState, useContext } from 'react'
import "./contact.scss"
import WpPng from "../../images/wspPng.png"
import GmailPng from "../../images/gmailPng.png"
import MailPng from "../../images/mailPng.png"
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context"


const Contact = () => {
    const formRef = useRef()
    const [ done, setDone] = useState(false)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs
        .sendForm(
            'service_hjs47ci', 
            'template_t7xvf3a',
            formRef.current, 
            'user_ubouEC9SxOwUcx52JEA52'
            )
      .then(
        (result) => {
        console.log(result.text);
        setDone(true)
      }, 
        (error) => {
        console.log(error.text);
      }
    )
    }

  return (
    <div className='contact'>
        <div className='contactBg'></div>
        <div className='contactWrapper'>
            <div className='contactLeft'>
                <h1 className='contactTitle'>Contacto</h1>
                <div className='contactInfo'>
                    <div className='contactInfoItem'>
                        <img src={WpPng} alt='' className='contactIconWp'/>
                        +54 9 11 230 648 70
                    </div>
                    
                    <div className='contactInfoItem'>
                        <img src={GmailPng} alt='' className='contactIcon'/>
                        francoalvarezmarinelarena@gmail.com
                    </div>

                    <div className='contactInfoItem'>
                        <img src={MailPng} alt='' className='contactIcon'/>
                        francoalvarez1995@hotmail.com
                    </div>

                    
                </div>
            </div>
            <div className='contactRight'>
        
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Name' name="userName"/>
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Subject' name="userSubject"/>
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Email' name="userEmail"/>
                    <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="message" name="message"/>
                    <button>Submit</button>
                    {done && "Thank you"}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact