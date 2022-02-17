import React, { useContext } from 'react'
import "./toggle.scss"
import Sun from "../../images/solUno.png"
import Moon from "../../images/lunaCuatro.png"
import { ThemeContext } from "../../context"

const Toggle = () => {
    const theme = useContext(ThemeContext)
    const handleClick = () => {
        theme.dispatch({type:"TOGGLE"})
    }
  return (
    <div className='toggle'>
        <img src={Sun} alt='' className='toggleIcon'/>
        <img src={Moon} alt='' className='toggleIcon'/>
        <div className='toggleButton' onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25 }}></div>
    </div>
  )
}

export default Toggle