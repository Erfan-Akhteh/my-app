import React,{useContext} from 'react'
//Components
import Product from './shared/Product';

//Style
import Style from "./Store.module.css"

//Context
import {ProductContext} from '../context/ProductContextProvider';
import Loader from './Loader';


const Store = () => {
    const product=useContext(ProductContext)
  return (
  <>
 
    <div className={Style.container}>
  
{
    product.length?product.map(item=><Product key={item.id} productData={item}/>):<Loader/>
}
    </div>
   
    
  </>
  )
   
}

export default Store