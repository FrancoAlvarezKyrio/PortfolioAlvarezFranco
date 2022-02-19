import React from 'react'
import "./productList.scss"
import Product from "../product/Product"
import {products} from "../../data"

const ProductList = () => {
  return (
    <div className='productList'>
        <div className='productListTexts'>
            <h1 className='productListTitle'>Mis proyectos</h1>
        </div>
        <div className='pl-List'>
          {products.map((item) => 
          (<Product key={item.id} image={item.img} link={item.link}/>)
          )}
        </div>
    </div>
  )
}

export default ProductList