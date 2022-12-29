import React, {useContext } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, Outlet } from 'react-router-dom';
import { GlobleInfo } from '../App.js';

const Header = () => {

  const {product} = useContext(GlobleInfo)
  const [productQuantity,setProductQuantity] = product;
  const {myCart} = useContext(GlobleInfo);
  const [cart] = myCart;
 

  return (
    <>
    <div className='header'>
    <Link to={'/'}>
        <div className='logo'>
            <img src='images/logo_vasyerp_nav.png' className='logo-img'/>
        </div>
   </Link>
        <nav className='menu'>
        <Link to={'/'}>
            <p className='nav-names nav-home'>Home</p>
        </Link>
        <Link to={'/'}>
            <p className='nav-names nav-products'>Products</p>
        </Link>
        <Link to={'/'}>
            <p className='nav-names nav-aboutUs'>About Us</p>
        </Link>
        <Link to={'/'}>
            <p className='nav-names nav-contactUs'>Contact Us</p>
         </Link>
        </nav>
        <Link to={'/cart-product-list'}>
        <div className='cart-icon-box'>
            <AiOutlineShoppingCart className='cart-icon'/>
            <span className='item-added'><p className='header-cart-qty'>{cart.length}</p></span>
        </div>
        </Link>
    </div>
    <Outlet/>
    </>
  )
}

export default Header