import './App.css';
import Header from './components/Header'
import ProductList from './components/ProductList'
import { useState, createContext } from "react";
import {product_json} from './product.js';
export const GlobleInfo = createContext();
function App() {
  const [productQuantity,setProductQuantity] = useState(10)
  const [products,setProducts] = useState(product_json)
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
    <GlobleInfo.Provider value={{product:[productQuantity,setProductQuantity],methods:[add,remove], product_json:product_json}}>
     <Header/>
     <ProductList/>
   </GlobleInfo.Provider>
  );
}

export default App;
