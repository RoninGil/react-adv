import { useContext } from "react"
import { ProductContext } from "./ProductCard"

import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'

export interface Props {
    img?: string;
    className?: string;
}

export const ProductImage = ({img = '', className}: Props) => {
    const {product} = useContext(ProductContext)
    return <img className={`${styles.productImg} ${className}`} src={product.img ? product.img : (img ? img : noImage) } alt="Product"/>
}