import React from "react";
// import Button from "../Button/Button";
import Link from "next/link";
import styles from './nav.module.scss'

export default function Nav() {
  return (
    <div>
      <div>
        <Link className={styles.link} href={"/"}>Головна сторінка</Link>
        <Link className={styles.link} href={"blog"}>Блог</Link>
        <Link className={styles.link} href={"about"}>Про нас</Link>
      </div>
      {/* <Button>Увійти</Button>/ */}
    </div>
  );
}
