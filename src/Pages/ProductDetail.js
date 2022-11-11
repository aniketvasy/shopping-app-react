import React from 'react'
import { useLocation } from 'react-router-dom'

const ProductDetail = () => {
    const location = useLocation();
    const {name,id,price,url,discription} = location.state.detail
    console.log(name)
  return (
    <>
    <div className='product-detail'>
        <div className='product-detail-image-comp'>
            <img src= {url} className='product-detail-image'/>
        </div>
        <div className='product-detail-info'>
            <div className='product-detail-info-title'>
                {name}
            </div>
            <div className='product-detail-info-discription'>
            {discription}
            </div>
            <div className='product-detail-price'>
                ₹ {price}
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductDetail


//props
// -
// productDetailsForCart={{
//   name:props.name,
//   url:props.url,
//   id:props.id,
//   price:props.price
// }}