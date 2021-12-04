import React, { useState } from "react";
import Header from "./components/Header/Header";
import NavigationPane from "./components/NavigationPane/NavigationPane";
import ItemWindow from "./components/Item/ItemWindow";
import ProductDetail from "./components/ProductDetail/ProductDetail";

import products from "./img-resource/products";

import styles from "./MainPage.module.css";

function MainPage() {
  const [openDetail, setOpenDetail] = useState(false);
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
  };

  const filterHandler = (id) => {
    const newFilteredProduct = products.filter(
      (product) => product.category === id
    );
    id === 999
      ? setFilteredProducts(products)
      : setFilteredProducts(newFilteredProduct);
  };

  const itemDetail = openDetail ? (
    <React.Fragment>
      {" "}
      <ProductDetail object={productSelected} />
      <div className={styles.overlay} onClick={onCloseHandler} />
    </React.Fragment>
  ) : (
    ""
  );

  return (
    <React.Fragment>
      <div className={styles.main}>
        {itemDetail}
        <NavigationPane onFilterSelected={filterHandler} />
        <div>
          <Header />
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
