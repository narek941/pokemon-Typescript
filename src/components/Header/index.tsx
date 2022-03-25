import React from "react";

import logo from "../../assets/img/logo.png";

import styles from "./Header.module.scss";

const Header: React.FC = () => (
  <div className={styles.container}>
    <a href="/">
      <img src={logo} alt="Logo" />
    </a>
  </div>
);

export default Header;
