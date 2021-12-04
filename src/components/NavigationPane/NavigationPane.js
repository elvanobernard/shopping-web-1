import React from "react";

import NavigationItem from "./NavigationItem";
import styles from "./NavigationPane.module.css";

const categories = [
  {
    id: 999,
    title: "All Items",
  },
  {
    id: 300,
    title: "Shirts",
  },
  {
    id: 200,
    title: "Jackets",
  },
  {
    id: 500,
    title: "Polo Shirts",
  },
  {
    id: 100,
    title: "Tees",
  },
  {
    id: 400,
    title: "Pants",
  },
  {
    id: 600,
    title: "Accessories",
  },
]; // Later will be pulled from database

function NavigationPane(props) {
  return (
    <div className={styles["navigation-container"]}>
      {categories.map((category) => (
        <NavigationItem
          title={category.title}
          key={category.id}
          id={category.id}
          onFilterSelected={props.onFilterSelected}
        />
      ))}
    </div>
  );
}

export default NavigationPane;
