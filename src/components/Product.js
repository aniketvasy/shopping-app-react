import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { GlobleInfo } from '../App';
import AddRemoveButton from '../utils/AddRemoveButton';
import AddToCartButton from '../utils/AddToCartButton';

const Product = (props) => {
    const {product,methods,myCart} = useContext(GlobleInfo);
    const [cart,addProductCart] = myCart; //////////////////---------
    const [productQuantity,setProductQuantity] = product;
    const [cartProductQty , setCartProductQty] = useState(0)
    const navigate = useNavigate();

    function checkQty(id){
      let qty = 0;
      // console.log("---",id)
      for(let i = 0 ; cart.length>i; i++){
        if(cart[i].cartId == id){
          // console.log("cart Id",cart[0].cartId)
        qty = cart[i].cartQty;
        }
      }
      return qty
    }
    useEffect(()=>{
      setCartProductQty(checkQty(props.id))
    })

  //  const goToProductDetail = () =>{
  //    navigate("/product-detail")
  //  }
// console.log("hello",cartProductQty)
// console.log("cart",cart)
  return (
    <div className='product-container'>
        <div className='product-image-container'>
          <Link
          to={'product-detail'}
          state={{detail:props,qty:cartProductQty}}
          >
        <img src={props.url} className='product-img'/>
        </Link>
        </div>
        <div className='product-title'>
            {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
        </div>
        <div className='product-price'>
            <p>₹ {props.price}</p>
            </div>
        <div className='product-discription'>
        {props.discription}
        </div>

       
       { cartProductQty>0 ? <AddRemoveButton  state={cartProductQty} productDetailsForCart={{
          name:props.name,
          url:props.url,
          id:props.id,
          price:props.price
        }} />:<AddToCartButton productDetailsForCart={{
          name:props.name,
          url:props.url,
          id:props.id,
          price:props.price
        }} />}
    </div>
  )
}

export default Product



    // // console.log(props)
    // // const foundedInCartQty = cart.find((cartProduct)=>{
    // //   if(cartProduct.cartId==props.id){
    // //     console.log("cart Product=====>",cartProduct.cartQty)
    // //     setQty(cartProduct.cartQty)
    // //     console.log("qty in f",cartProduct.cartQty)
    // //     return cartProduct.cartQty;
    // //   }
    // // })

    // // const foundedInCartQty = 0;

    // for(let i = 0; cart.length>i; i++ ){
    //   if(cart[i].cartId==props.id){
    //     setQty(cart[i].cartQty)
    // }
    
    // useEffect(() => {

    // }, [qty])
    
    // // console.log("cart in product",cart)
    // // console.log("--------",foundedInCartQty)