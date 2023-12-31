import React from "react";
import styles from "./header.module.scss";
import Logo from "../Logo/Logo";
import Nav from "../Navigation/Nav";

export default function Header() {
  return (
    <header className={styles.header}>
        <Logo />
      <Nav />
    </header>
  );
}
