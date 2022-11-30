import React, { useContext } from 'react'
import Cart from './shared/Cart';

import { CartContext } from '../context/CardContextProvider'
import { Link } from 'react-router-dom';


// Style
import styles from "./ShopCart.module.css";
const ShopCart = () => {
    const {state,dispach}=useContext(CartContext)
   
  return (
    <div className={styles.container}>
      
        <div className={styles.cartContainer}>
            {state.selectedItem.map(item=> <Cart key={item.id} data={item}/>)  }
            
        </div>
        
        {
            
           
            state.itemsCounter >0&&  <div className={styles.payments}>
                <p><span>Total Item :</span>{state.itemsCounter}</p>
                <p><span>Total payment :</span>{state.total}$</p>
                <div className={styles.buttonContainer}>
                    <button className={styles.clear} onClick={()=>dispach({type:"CHECKOUT"})}>Check out</button>
                    <button className={styles.checkout} onClick={()=>dispach({type:"CLEAR"})}>Clear</button>
                </div>

            </div>
            
        }
        {
             state.checkout&&<div className={styles.complete}>
                <h3>Check out Successfully</h3>
                <Link to='/products'>Bay More</Link>
            </div>
        }
        {
          state.itemsCounter === 0 && !state.checkout && <div className={styles.complete}>
                <h3>want to Buy?</h3>
                <Link to='/products'> GO to shop </Link>
            </div>
        }
    </div>
  )
}

export default ShopCart