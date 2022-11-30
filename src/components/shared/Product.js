import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

//Icon
import trashicon from '../../assets/icons/trash.svg';


//Helper
import {shorten,isInCart,quantityCount} from '../../helper/function';

//Context
import {CartContext} from '../../context/CardContextProvider';


// Style
import styles from "./Product.module.css";

const Product = ({productData}) => {

    const {state,dispach}=useContext(CartContext)
    // JSON.parse(localStorage.getItem('state'))
  return (
    <>
  
    <div className={styles.container}>
        <img className={styles.cardImage} src={productData.image} alt='imag'/>
        <h3>{shorten(productData.title)}</h3>
        <p>{productData.price}$</p>
        
        <div  className={styles.linkContainer}>
            <Link to={`/products/${productData.id}`}>Details</Link>
            <div className={styles.buttonContainer}>
                 {quantityCount(state,productData.id) > 1 &&<button className={styles.smallButton} onClick={()=>dispach({type:"DECRASE",paylod:productData})}>-</button> }

                {quantityCount(state,productData.id) === 1 &&<button className={styles.smallButton} onClick={()=>dispach({type:"REMOVE_ITEM",paylod:productData})}><img src={trashicon} alt='trash'/></button> }
                
                {quantityCount(state,productData.id)>0 &&<span className={styles.counter}>{quantityCount(state,productData.id)}</span>}
                {
                    isInCart(state, productData.id)?
                    <button className={styles.smallButton} onClick={()=>dispach({type:"INCREASE",paylod:productData})}>+</button>:
                    <button onClick={()=>dispach({type:"ADD_ITEM",paylod:productData})}>Add to cart</button>
                }
                
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Product