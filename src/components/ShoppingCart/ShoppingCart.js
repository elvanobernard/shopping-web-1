import React from "react";

import Card from "../UI/Card";
import CartItem from "./CartItem";

import styles from "./ShoppingCart.module.css";

function ShoppingCart(props) {
  const cart = props.cart.cartItem;
  console.log("Shopping cart");
  console.log(cart[0].price);
  const totalPrice = cart
    .map((item) => {
      return item.price * item.qty;
    })
    .reduce((total, value) => total + value);

  return (
    <Card className={styles.container}>
      <h2 className={styles.title}>Shopping Cart</h2>
      <hr />
      <div className={styles["product-list-container"]}>
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
      <hr />
      <div className={styles.foot}>
        <span className={styles.total}>Total: IDR {totalPrice}</span>
        <button className={styles.button}>Continue to Payment</button>
      </div>
    </Card>
  );
}

export default ShoppingCart;
