import React from "react";

import Card from "../UI/Card";

import styles from "./ProductDetail.module.css";

function ProductDetail() {
  return (
    <Card className={styles.container}>
      This is detail of the selected product
    </Card>
  );
}

export default ProductDetail;
