import React from 'react';
import Button from "../Button/Button";
import styles from './productItem.module.scss'

const ProductItem = ({product, onAdd}) => {

    const onAddHandler = () => {
        onAdd(product);
    }

    return (
        <div className={styles.container}>
            <div className={styles.img}/>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.description}>{product.description}</div>
            <div className={styles.price}>
                <span>Вартість: <b>{product.price}</b></span>
            </div>
            <Button className={styles.btn} onClick={onAddHandler}>
                Додати до кошика
            </Button>
        </div>
    );
};

export default ProductItem;