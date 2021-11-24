import React from "react";

import Card from "../UI/Card";
import styles from "./ProductCard.module.css";

function ProductCard(props) {
  return (
    <Card className={styles.card}>
      <img
        src={props.object.img}
        className={styles["card-img"]}
        alt="product sold"
      />
      <p>{props.object.title}</p>
      <span>{props.object.price}</span>
    </Card>
  );
}

export default ProductCard;
