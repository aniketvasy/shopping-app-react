import React, { useContext } from 'react'
import Product from '../components/Product'
import { useState} from "react";
import { GlobleInfo } from '../App';
import { Outlet } from 'react-router-dom';


const ProductList = () => {
  const {product_json,myCart} = useContext(GlobleInfo);


  // console.log(product_json);
  // const List = product_json.map((product)=>(
  //   <Product
  //   name={product.name}
  //   price={product.price}
  //   discription={product.discription}
  //   id={product.id}
  //   key={product.id}
  //   url={product.url}
  //   />
  // ))
  return (
    <>
    <div className='productList'>
     {product_json.map((product)=>(
    <Product
    name={product.name}
    price={product.price}
    discription={product.discription}
    id={product.id}
    key={product.id}
    url={product.url}
    />
  ))}
    </div>
    </>
  )
}

export default ProductList