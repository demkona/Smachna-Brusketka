import React from "react";
import styles from "./header.module.scss";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";

export default function Header() {
  return (
    <div className={styles.header}>
      <Logo />
      <Button>Увійти</Button>
    </div>
  );
}
