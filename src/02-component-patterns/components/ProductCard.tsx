import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css'
import { createContext, useContext } from 'react';
import { ProductContextProps, Props } from '../interfaces/Products.interfaces';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({product, children}: Props) => {
    const { counter, increaseBy} = useProduct();
    return (
        <Provider value={{counter, increaseBy, product}}>
            <div className={styles.productCard}>
                {/* <img className={styles.productImg} src="./coffee-mug.png" alt="coffe mug"/> */}

                {children}
            </div>
        </Provider>
        
    )
}