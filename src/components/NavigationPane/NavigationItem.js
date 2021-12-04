import React from "react";

import styles from "./NavigationItem.module.css";

function NavigationItem(props) {
  const filterSelectedHandler = () => {
    props.onFilterSelected(props.id);
  };

  return (
    <div className={styles.navigation} onClick={filterSelectedHandler}>
      {props.title}
    </div>
  );
}

export default NavigationItem;
