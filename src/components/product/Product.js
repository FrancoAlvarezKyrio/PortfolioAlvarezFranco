import React from 'react'
import "./product.scss"

const Product = ({image,link}) => {
  return (
    <div className='product'>
      <div className='productBrowser'>
        <div className='productCircle'></div>
        <div className='productCircle'></div>
        <div className='productCircle'></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={image} alt='' className='productImage' />
      </a>
    </div>
  )
}

export default Product 