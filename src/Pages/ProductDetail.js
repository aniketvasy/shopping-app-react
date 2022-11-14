import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { GlobleInfo } from '../App';
import AddRemoveButton from '../utils/AddRemoveButton';
import AddToCartButton from '../utils/AddToCartButton';

const ProductDetail = () => {
    const location = useLocation();
    const {name,id,price,url,discription} = location.state.detail;
    const qty = location.state.qty;
    const [pQty,setPQty] = useState(0)
    
    const {product,methods,myCart} = useContext(GlobleInfo);
    const [cart,addProductCart] = myCart; 
    const [update,setUpdate] = useState(10)
    const forceUpdate=()=>{
        console.log("update",update)
        setUpdate(update+1);
    }

    useEffect(()=>{
        setPQty(()=>{
            for(let i =0; cart.length>i;i++){
                if(cart[i].cartId===id){
                    return cart[i].cartQty
                }
            }
        })
    },[cart])
console.log("pqty",pQty)
  return (
    <>
    <div className='product-detail'>
        <div className='product-detail-image-comp'>
            <img src= {url} className='product-detail-image'/>
        </div>
        <div className='product-detail-info'>
            <div className='product-detail-info-title'>
            {name.charAt(0).toUpperCase() + name.slice(1)}
            </div>
            <div className='product-detail-price'>
                ₹ {price}
            </div>
            <div className='product-detail-info-discription'>
            {discription}
            </div>
            {!pQty
            ?
            <div className='product-detail-add-to-cart'>
                <AddToCartButton 
         productDetailsForCart={{
          name:name,
          url:url,
          id:id,
          price:price
        }
        }
        state={pQty}
        onClick={forceUpdate}
        />
    
        </div>
            :
            <div className='product-detail-add-remove-cart'>
            <AddRemoveButton
            productDetailsForCart={{
                name:name,
                url:url,
                id:id,
                price:price
              }}
              state={pQty}
              onClick={forceUpdate}
              />
              </div>
            }  
            {cart.length && <div className='goToCartPageComp'>
                <button className='goToCartPage'>
                    Go To Cart
                </button>
            </div>}
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