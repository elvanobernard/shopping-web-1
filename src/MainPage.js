import React from "react";
import NavigationPane from "./components/NavigationPane/NavigationPane";
import ItemWindow from "./components/Item/ItemWindow";

import styles from "./MainPage.module.css";

function MainPage() {
  return (
    <div className={styles.main}>
      <NavigationPane />
      <ItemWindow />
    </div>
  );
}

export default MainPage;
