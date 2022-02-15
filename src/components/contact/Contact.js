import React, { useRef, useState } from 'react'
import "./contact.scss"
import PhonePng from "../../images/phonePng.png"
import EmailPng from "../../images/emailPng.png"
import AddressPng from "../../images/addressPng.png"
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef()
    const [ done, setDone] = useState(false)
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
                <h1 className='contactTitle'>Discutamos a cerca de el proyecto</h1>
                <div className='contactInfo'>
                    <div className='contactInfoItem'>
                        <img src={PhonePng} alt='' className='contactIcon'/>
                        +54 9 11 230 648 70
                    </div>
                    <div className='contactInfoItem'>
                        <img src={EmailPng} alt='' className='contactIcon'/>
                        francoalvarez1995@hotmail.com
                    </div>
                    <div className='contactInfoItem'>
                        <img src={AddressPng} alt='' className='contactIcon'/>
                        Argentina, Bs. As., zona norte, San Isidro.
                    </div>
                </div>
            </div>
            <div className='contactRight'>
                <p className='contactDescrip'>
                    <b>Kyrio Alvarez Urrutia</b> Kyrio Alvarez Urrutia Kyrio Alvarez Urrutia Kyrio Alvarez Urrutia
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" placeholder='Name' name="userName"/>
                    <input type="text" placeholder='Subject' name="userSubject"/>
                    <input type="text" placeholder='Email' name="userEmail"/>
                    <textarea rows="5" placeholder="message" name="message"/>
                    <button>Submit</button>
                    {done && "Thank you"}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact