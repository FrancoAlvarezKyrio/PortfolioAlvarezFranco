import React from 'react'
import "./productList.scss"
import Product from "../product/Product"
import {products} from "../../data"

const ProductList = () => {
  return (
    <div className='productList'>
        <div className='productListTexts'>
            <h1 className='productListTitle'>Kyrio Alvarez Urrutia </h1>
            <p className='productListDescrip'>
                    Kyrio Alvarez Urrutia - 18 meses - 10/08/21 - 17:47hrs
                    Kyrio Alvarez Urrutia - 18 meses - 10/08/21 - 17:47hrs
                    Kyrio Alvarez Urrutia - 18 meses - 10/08/21 - 17:47hrs
            </p>
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