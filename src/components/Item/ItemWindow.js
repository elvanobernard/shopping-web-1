import React from "react";

import ProductCard from "./ProductCard";
import styles from "./ItemWindow.module.css";

function ItemWindow(props) {
  return (
    <div className={styles["item-container"]}>
      {props.products.map((product) => (
        <ProductCard
          object={product}
          key={product.id}
          onItemSelected={props.onItemSelected}
        />
      ))}
    </div>
  );
}

export default ItemWindow;
