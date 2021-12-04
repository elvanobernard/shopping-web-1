import React from "react";

import { IoCartSharp } from "react-icons/io5";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <IoCartSharp className={styles.icon} />
    </div>
  );
}

export default Header;
