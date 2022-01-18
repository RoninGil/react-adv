import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css'
import { createContext, ReactElement } from 'react';
import { Product, ProductContextProps } from '../interfaces/Products.interfaces';

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({product, children, className}: Props) => {
    const { counter, increaseBy} = useProduct();
    return (
        <Provider value={{counter, increaseBy, product}}>
            <div className={`${styles.productCard} ${className}`}>
                {/* <img className={styles.productImg} src="./coffee-mug.png" alt="coffe mug"/> */}

                {children}
            </div>
        </Provider>
        
    )
}