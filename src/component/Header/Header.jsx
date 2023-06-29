import React from "react";
import styles from "./header.module.scss";
import Logo from "../Logo/Logo";

export default function Header() {
  return (
    <div className={styles.header}>
      <Logo />
    </div>
  );
}
