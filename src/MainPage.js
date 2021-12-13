import React, { useState } from "react";
import Header from "./components/Header/Header";
import NavigationPane from "./components/NavigationPane/NavigationPane";
import ItemWindow from "./components/Item/ItemWindow";
import ProductDetail from "./components/ProductDetail/ProductDetail";

import products from "./img-resource/products";

import styles from "./MainPage.module.css";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

function MainPage() {
  const [openDetail, setOpenDetail] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [productSelected, setProductSelected] = useState("");
  const [filteredProduct, setFilteredProducts] = useState(products);
  const [shoppingCart, setShoppingCart] = useState({ qty: 0, cartItem: [] });

  const itemSelectedHandler = (object) => {
    setProductSelected(object);
    setOpenDetail(true);
  };

  const onCloseHandler = () => {
    setProductSelected({});
    setOpenDetail(false);
    setOpenCart(false);
  };

  const filterHandler = (id) => {
    const newFilteredProduct = products.filter(
      (product) => product.category === id
    );
    id === 999
      ? setFilteredProducts(products)
      : setFilteredProducts(newFilteredProduct);
  };

  const addToCartHandler = (newItem) => {
    setShoppingCart((prev) => {
      const itemQty = +newItem.qty;
      const newQty = prev.qty + itemQty;
      const index = prev.cartItem.findIndex((item) => item.id === newItem.id);
      const newCartItem = [...prev.cartItem];
      if (!(index < 0)) {
        console.log(`Quantity:`);
        console.log(newCartItem[index].qty);
        console.log(itemQty);
        const newQuantity = newCartItem[index].qty + itemQty;
        console.log(`New item QTY = ${newQuantity}`);
        newCartItem[index].qty = newQuantity;
        console.log(
          `QTY new = ${
            newCartItem[index].qty
          } newQTY = ${newQuantity} is equal? ${
            newCartItem[index].qty === newQuantity
          }`
        );

        // const oldItem = newCartItem.splice(index, 1);
        // console.log("oldItem");
        // console.log(oldItem);
        // console.log("newItem.qty");
        // console.log(+newItem.qty);
        // newItem.qty = newItem.qty + oldItem.qty;
        // newCartItem.splice(index, 0, newItem);
      } else {
        // newCartItem = [...prev.cartItem, newItem];
        newCartItem.push(newItem);
      }
      console.log(newQty);
      console.log(newCartItem);
      return { qty: newQty, cartItem: newCartItem };
    });
    onCloseHandler();
  };

  const cartClickedHandler = () => {
    setOpenCart(true);
  };

  const overlay = <div className={styles.overlay} onClick={onCloseHandler} />;

  const itemDetail = openDetail ? (
    <React.Fragment>
      {" "}
      <ProductDetail object={productSelected} onItemAdded={addToCartHandler} />
      {overlay}
    </React.Fragment>
  ) : (
    ""
  );

  const cart = openCart ? (
    <React.Fragment>
      <ShoppingCart cart={shoppingCart} />
      {overlay}
    </React.Fragment>
  ) : (
    ""
  );

  return (
    <React.Fragment>
      <div className={styles.main}>
        {itemDetail}
        {cart}
        <NavigationPane onFilterSelected={filterHandler} />
        <div>
          <Header cart={shoppingCart.qty} onCartClicked={cartClickedHandler} />
          <ItemWindow
            products={filteredProduct}
            onItemSelected={itemSelectedHandler}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default MainPage;
