import React,{useEffect,useState, createContext} from 'react'
//Context
import {getProduct} from '../services/api';


export const ProductContext=createContext()

const ProductContextProvider = ({children}) => {
const [product,setProduct]=useState([])

useEffect(()=>{
    const fechAPi=async()=>{
        setProduct(await getProduct())
    }
    fechAPi()
},[])


  return (
    
    <div>
    
        <ProductContext.Provider value={product}>
        {children}
        </ProductContext.Provider>
       
    </div>
  )
}

export default ProductContextProvider