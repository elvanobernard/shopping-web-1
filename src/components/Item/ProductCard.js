import React from "react";

import styles from "./ProductCard.module.css";

function ProductCard(props) {
  return (
    <div className={styles.card}>
      <img
        src={props.object.img}
        className={styles["card-img"]}
        alt="product sold"
      />
      <p>{props.object.title}</p>
      <span>{props.object.price}</span>
    </div>
  );
}

export default ProductCard;
