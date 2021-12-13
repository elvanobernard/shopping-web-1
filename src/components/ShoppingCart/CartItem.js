import React from "react";

import styles from "./CartItem.module.css";

function CartItem(props) {
  const product = props.item;

  return (
    <div className={styles.container}>
      <img src={product.img} alt={product.title} className={styles.img} />
      <div className={styles["detail-container"]}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.info}>Price: IDR {product.price}</p>
        <p className={styles.info}>Size: {product.size}</p>
        <p className={styles.info}>Quantity: {product.qty}</p>
        <p className={styles.info}>Total: IDR {product.price * product.qty}</p>
      </div>
    </div>
  );
}

export default CartItem;
