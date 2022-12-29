import './App.css';
import Header from './components/Header'
import ProductList from './Pages/ProductList'
import { useState, createContext, useEffect } from "react";
import {product_json} from './product.js';
import { Route, Routes } from 'react-router-dom';
import CartProductList from './Pages/CartProductList';
import CartProduct from './components/CartProduct';
import ProductDetail from './Pages/ProductDetail';
import OrderPlaced from './Pages/OrderPlaced';

export const GlobleInfo = createContext();

function App() {
  const [productQuantity,setProductQuantity] = useState(10)
  const [products,setProducts] = useState(product_json);
  const [cart,setCart] = useState([]);
  const [loading,setLoading] = useState(true)

  const placeOrder= async (order) =>{
    const headers = new Headers()
    headers.append("Content-Type", "application/json")

    const body = {
      "order": order
    }

    const options = {
      method: "POST",
      headers,
      mode: "cors",
      body: JSON.stringify(body),
    }

    await fetch("https://eohwatz76nodu3o.m.pipedream.net", options)
    setCart([])
  }
 
  
  const addProductCart = (productDetailsForCart) =>{
    const {name:name,url:url,id:id,price:price} = productDetailsForCart
    setCart((prevcart)=>{
      const cartProductFound = prevcart.filter((cart_product)=>{
        // console.log("founded id",cart_product)
        // console.log(cart)
        return cart_product.cartId == id
      
      })
      function addQty(){
        return(
        prevcart.map((cart_product)=>{
          if(cart_product.cartId === id){
            // console.log("ddd p", {...cart_product})
            // console.log(name)
            return {...cart_product,cartQty:cart_product.cartQty+1,name:name,url:url,price:price}
          }
          else{
            return {...cart_product}
          }
        }
        )
      )
      }
      // console.log("founded arr",cartProductFound)
      if(cartProductFound.length>0){  
        // console.log("Found------")
        return (
          addQty()
        )
      }else{
        // console.log("Not Found")
        return [...prevcart,{cartId:id,cartQty:1,name:name,url:url,price:price}]
      }
    }
    )
  }

  const removeProductCart = (productDetailsForCart) =>{
    let isZero = false;
    const {name:name,url:url,id:id,price:price} = productDetailsForCart
    setCart((prevcart)=>{
      const cartProductFound = prevcart.filter((cart_product)=>{
        // console.log("founded id",cart_product)
        // console.log(cart)
        return cart_product.cartId == id
      
      })
      function removeQty(){
        return(
        prevcart.map((cart_product)=>{
          if(cart_product.cartId === id){
            // console.log("ddd p", {...cart_product})
            if(cart_product.cartQty-1==0){
              isZero = true
              // console.log("yes this is zero")
            }
            // console.log(cart_product.cartQty)
            return {...cart_product,cartQty:cart_product.cartQty-1}
          }
          else{
            return {...cart_product}
          }
        }
        )
      )
      }
      // console.log("founded arr",cartProductFound)
      if(cartProductFound.length>0){  
        // console.log("Found------")
        let arr = removeQty();
        if(isZero){
          return(
            arr.filter((zeroP)=>{
              if(zeroP.cartQty==0){
                return false;
              }
              else{
                return true;
              }
            })
          )
        }else{
          return arr
        }
        // return (
        //   removeQty()
        // )
      }else{
        // console.log("Not Found")
        return [...prevcart,{cartId:id,cartQty:1}]
      }
    }
    )
  }

  const deleteProductCart = (idd) =>{
    // console.log("deleteProductCart called    id is",idd)
    // console.log(cart)
    setCart((prevcart)=>{
      return prevcart.filter((product)=>{
        if(product.cartId== idd){
          return false;
        }else{
          return true;
        }
      })
    })
  }

// useEffect(()=>{
//   console.log("this is cart",cart)
// },[cart])

//  console.log(cart)
  return (
    <>
    <GlobleInfo.Provider value={{product:[productQuantity,setProductQuantity], product_json:product_json,myCart:[cart,addProductCart,removeProductCart,deleteProductCart], placeOrder:placeOrder}}>
    <Routes>
     <Route path='/' element={<Header/>} >
       <Route index element={<ProductList/>}/>
       <Route path='/cart-product-list' element={<CartProductList/>}/>
       <Route path='/product-detail' element={<ProductDetail/>}/>
       <Route path='/order-placed' element={<OrderPlaced/>}/>
     </Route>
   </Routes>
    </GlobleInfo.Provider>
    </>
  );
}

export default App;
