import React from "react";

import styles from "./ProductDetailRight.module.css";
import SizeChart from "./SizeChart";

function ProductDetailRight(props) {
  const itemAddedHandler = (size, qty) => {
    const product = props.object;
    props.onItemAdded({
      id: product.id,
      title: product.title,
      price: product.price,
      img: product.img,
      size,
      qty,
    });
  };

  return (
    <div className={styles.container}>
      <h2>{props.object.title}</h2>
      <span className={styles.price}>IDR {props.object.price}</span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
      <SizeChart
        available={props.object.availability}
        onItemAdd={itemAddedHandler}
      />
    </div>
  );
}

export default ProductDetailRight;
