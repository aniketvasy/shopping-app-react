import React, {useContext } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Outlet } from 'react-router-dom';
import { GlobleInfo } from '../App.js';

const Header = () => {

  const {product} = useContext(GlobleInfo)
  const [productQuantity,setProductQuantity] = product;
 
  console.log(productQuantity)

  return (
    <>
    <div className='header'>
        <div className='logo'>
            <img src='images/logo_vasyerp_nav.png' className='logo-img'/>
        </div>
        <nav className='menu'>
            <p className='nav-names nav-home'>Home</p>
            <p className='nav-names nav-products'>Products</p>
            <p className='nav-names nav-aboutUs'>About Us</p>
            <p className='nav-names nav-contactUs'>Contact Us</p>
        </nav>
        <div className='cart-icon-box'>
            <AiOutlineShoppingCart className='cart-icon'/>
            <span className='item-added'>{productQuantity}</span>
        </div>
    </div>
    <Outlet/>
    </>
  )
}

export default Header