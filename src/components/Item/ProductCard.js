import React from "react";

import styles from "./ProductCard.module.css";

function ProductCard(props) {
  const object = props.object;
  const clickHandler = () => {
    props.onItemSelected(object);
  };

  return (
    <div className={styles.card} onClick={clickHandler}>
      <img src={object.img} className={styles["card-img"]} alt="product sold" />
      <p>{object.title}</p>
      <span>{object.price}</span>
    </div>
  );
}

export default ProductCard;
