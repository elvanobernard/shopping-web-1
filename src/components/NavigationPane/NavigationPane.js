import React from "react";

import NavigationItem from "./NavigationItem";
import styles from "./NavigationPane.module.css";

const categories = [
  "Shirts",
  "Jackets",
  "Polo Shirts",
  "Tees",
  "Pants",
  "Accessories",
]; // Later will be pulled from database

function NavigationPane() {
  return (
    <div className={styles["navigation-container"]}>
      {categories.map((category) => (
        <NavigationItem title={category} />
      ))}
    </div>
  );
}

export default NavigationPane;
