import React from "react";

import Card from "../UI/Card";

import styles from "./ProductDetail.module.css";
import ProductDetailRight from "./ProductDetailRight";

function ProductDetail(props) {
  return (
    <Card className={styles.container}>
      <img
        className={styles["product-img"]}
        src={props.object.img}
        alt={props.object.title}
      />
      <ProductDetailRight object={props.object} />
    </Card>
  );
}

export default ProductDetail;
