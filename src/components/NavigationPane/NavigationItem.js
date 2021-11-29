import React from "react";

import styles from "./NavigationItem.module.css";

function NavigationItem(props) {
  return <div className={styles.navigation}>{props.title}</div>;
}

export default NavigationItem;
