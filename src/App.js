import './App.css';
import Header from './components/Header'
import ProductList from './Pages/ProductList'
import { useState, createContext } from "react";
import {product_json} from './product.js';
import { Route, Routes } from 'react-router-dom';
import CartProductList from './Pages/CartProductList';

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
console.log({productQuantity})
  return (
    <>
    <GlobleInfo.Provider value={{product:[productQuantity,setProductQuantity],methods:[add,remove], product_json:product_json}}>
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
