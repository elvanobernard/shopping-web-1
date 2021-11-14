import React from "react";

import ProductCard from "./ProductCard";
import styles from "./ItemWindow.module.css";

import productDummy from "../../img-resource/shirt-blue.jpeg";

function ItemWindow() {
  return (
    <div className={styles["item-container"]}>
      <ProductCard
        object={{
          title: "Blue shirt",
          price: "IDR 160,000",
          img: productDummy,
        }}
      />
    </div>
  );
}

export default ItemWindow;
