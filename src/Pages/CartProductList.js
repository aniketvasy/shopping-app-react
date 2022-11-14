import React, { useContext } from 'react'
import { GlobleInfo } from '../App';
import CartProduct from '../components/CartProduct'
import OrderDetail from '../components/OrderDetail';
import uniqid from 'uniqid';


const CartProductList= () => {
  const {myCart} = useContext(GlobleInfo);
  const [cart,addProductCart] = myCart
console.log("cart",cart)
  const subtotal = () =>{
    let total = 0;
    for(let product of cart){
      total+=product.cartQty*product.price;
  
    }
    return total
  }

  return (<>
     { cart.length>0 ?
    <div className='cart'>
    <div className='cart-product-list'>
      <div className='cart-product-list-title'>
        ORDER LIST
      </div>
      <div className='cart-product-component'>
      {cart.map((product)=>(
      <CartProduct
        name = {product.name}
        id = {product.cartId}
        url = {product.url}
        cartQty = {product.cartQty}
        price = {product.price}
      key={uniqid()}
      />
  ))
      }
      </div>
    </div>
    <div className='TotalComponent'>
        <OrderDetail 
        totalItem={cart.length}
        subtotal={subtotal()}
        shipping={0}
        total = {subtotal()}
        />
      </div>
    </div>
    :
    <div className='empty-cart'>
    <img src='https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png'/>
    <div className='empty-cart-message'>YOUR CART IS EMPTY</div>
    </div>
}
    </>
  )
}

export default CartProductList;