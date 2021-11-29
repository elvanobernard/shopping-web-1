import React from "react";

import ProductCard from "./ProductCard";
import styles from "./ItemWindow.module.css";

import products from "../../img-resource/products.js";

function ItemWindow() {
  return (
    <div className={styles["item-container"]}>
      {products.map((product) => (
        <ProductCard object={product} />
      ))}
    </div>
  );
}

export default ItemWindow;
