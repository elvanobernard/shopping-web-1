import React from "react";
import NavigationPane from "./components/NavigationPane/NavigationPane";
import ItemWindow from "./components/Item/ItemWindow";
import ProductDetail from "./components/ProductDetail/ProductDetail";

import styles from "./MainPage.module.css";

function MainPage() {
  return (
    <div className={styles.main}>
      {/* <ProductDetail />
      <div className={styles.overlay} /> */}
      <NavigationPane />
      <ItemWindow />
    </div>
  );
}

export default MainPage;
