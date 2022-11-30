import React, { useContext } from 'react'

//icon
import trashIcon from "../../assets/icons/trash.svg"

//helper
import { shorten } from '../../helper/function'

//Context
import { CartContext } from '../../context/CardContextProvider'
// Style
import styles from "./Cart.module.css";

const Cart = (props) => {

    const {dispach}=useContext(CartContext)

    const {image,title,price,quantity}=props.data

  return (
    <div className={styles.container}>
        <img className={styles.productImage} src={image} alt='img'/>
        <div className={styles.data}>
            <h3>{shorten(title)}</h3>
            <p>{price} $</p>
        </div>
        <div>
            <span className={styles.quantity}>{quantity}</span>
        </div>
        <div className={styles.buttonContainer}>
            {
                quantity>1?
                <button onClick={()=>dispach({type:"DECRASE",paylod:props.data})}>-</button>:
                <button onClick={()=>dispach({type:"REMOVE_ITEM",paylod:props.data})}><img src={trashIcon} alt='trash'/></button>
            }
            <button onClick={()=>dispach({type:"INCREASE",paylod:props.data})}>+</button>
        </div>
    </div>
  )
}

export default Cart