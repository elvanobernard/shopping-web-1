import React, { useState } from "react";
import styles from "./SizeChart.module.css";

import { IoIosAdd } from "react-icons/io";
import { IoIosRemove } from "react-icons/io";

function SizeChart(props) {
  const [activeSize, setActiveSize] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const sizeSelectedHandler = (e) => {
    setActiveSize(parseInt(e.target.dataset.index));
    setQuantity(1);
  };

  const availableQty = props.available[activeSize].qty;

  const addButtonHandler = () => {
    if (quantity < availableQty) {
      setQuantity((prevQty) => prevQty + 1);
    }
  };

  const removeButtonHandler = () => {
    if (quantity > 1) setQuantity((prevQty) => prevQty - 1);
  };

  const addToCartHandler = () => {
    props.onItemAdd(props.available[activeSize].size, quantity);
  };

  const inputChangeHandler = (e) => {
    let value = +e.target.value;
    if (value > availableQty) value = availableQty;
    if (value < 1) value = 1;
    setQuantity(value);
  };

  return (
    <React.Fragment>
      <div className={styles.container}>
        {props.available.map((size, i) => {
          const className =
            i === activeSize
              ? `${styles.size} ${styles["active-size"]}`
              : styles.size;
          return (
            <span
              className={className}
              key={i}
              data-index={i}
              onClick={sizeSelectedHandler}
            >
              {size.size}
            </span>
          );
        })}
      </div>
      <div className={styles["input-container"]}>
        <button onClick={removeButtonHandler}>
          <IoIosRemove className={styles.icon} />
        </button>

        <input type="number" value={quantity} onChange={inputChangeHandler} />
        <button onClick={addButtonHandler}>
          <IoIosAdd className={styles.icon} />
        </button>
      </div>
      <p className={styles.availability}>Available: {availableQty} items</p>

      <button className={styles["add-to-cart"]} onClick={addToCartHandler}>
        Add to Cart
      </button>
    </React.Fragment>
  );
}

export default SizeChart;
