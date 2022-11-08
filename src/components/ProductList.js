import React, { useContext } from 'react'
import Product from './Product'
import { useState} from "react";
import { GlobleInfo } from '../App';


const ProductList = () => {
  const {product_json} = useContext(GlobleInfo);
  console.log(product_json);
  const List = product_json.map((product)=>(
    <Product
    name={product.name}
    price={product.price}
    discription={product.discription}
    id={product.id}
    key={product.id}
    url={product.url}
    />
  ))
  return (
    <div className='productList'>
   {List}
    </div>
  )
}

export default ProductList