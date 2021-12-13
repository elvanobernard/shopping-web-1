import React from "react";

import { IoCartSharp } from "react-icons/io5";

import styles from "./Header.module.css";

function Header(props) {
  return (
    <div className={styles.header} onClick={props.onCartClicked}>
      <IoCartSharp className={styles.icon} />
      <span>{props.cart}</span>
    </div>
  );
}

export default Header;
