import './App.css';
import Header from './components/Header'
import ProductList from './Pages/ProductList'
import { useState, createContext } from "react";
import {product_json} from './product.js';
import { Route, Routes } from 'react-router-dom';
import CartProductList from './Pages/CartProductList';
import CartProduct from './components/CartProduct';

export const GlobleInfo = createContext();
function App() {
  const [productQuantity,setProductQuantity] = useState(10)
  const [products,setProducts] = useState(product_json);
  const [cart,setCart] = useState([]);
  const add = ()=>{
  setProductQuantity(productQuantity+1);
  }

  const remove = ()=>{
      if(productQuantity){
       setProductQuantity(productQuantity-1);
      }
  }

  const addProductCart = (id) =>{

    setCart((prevcart)=>{
      const cartProductFound = prevcart.filter((cart_product)=>CartProduct.id == id)
      console.log("cartProdct",cartProductFound)
      console.log("prevCart",cart)

      
      if(cartProductFound){  
        console.log("Found")
        return ([
          prevcart.map((cart_product)=>{
            if(cart_product.id === id){
              return {...cart_product,cartQty:cart_product.cartQty+1}
          }
        }
        )
        ])
      }else{
        console.log("Not Found")
        return [...prevcart,{cartId:id,cartQty:1}]
      }
    }
    )
  }

  return (
    <>
    <GlobleInfo.Provider value={{product:[productQuantity,setProductQuantity],methods:[add,remove], product_json:product_json,myCart:[cart,addProductCart]}}>
    <Routes>
     <Route path='/' element={<Header/>} >
       <Route index element={<ProductList/>}/>
       <Route path='/cart-product-list' element={<CartProductList/>}/>
     </Route>
   </Routes>
    </GlobleInfo.Provider>
    </>
  );
}

export default App;
