import React,{useContext} from 'react'
import { Link,useParams } from 'react-router-dom';

//Context
import {ProductContext} from '../../context/ProductContextProvider';

// Style
import styles from "./ProductDetails.module.css";

const ProductDetails = () => {
    const {id} = useParams()
    const data=useContext(ProductContext)
    const product=data[id-1]
    const {image,title,descripton,price,category}=product
  return (
    <div className={styles.container}>
        <img className={styles.image} src={image} alt='product'/>
        <div className={styles.textContainer}>
            <h3>{title}</h3>
            <p className={styles.description}>{descripton}</p>
          <p className={styles.category}><span>category :</span>{category}</p>
            <div  className={styles.buttonContainer}>
                <span className={styles.price}>{price}$</span>
                <Link to={"/products"}>Go back</Link>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails



