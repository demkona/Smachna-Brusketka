import React from "react";
import Link from "next/link";
import styles from './nav.module.scss'

export default function Nav() {
  return (
      <div className={styles.container}>
        <Link className={styles.link} href={"/"}>Головна сторінка</Link>
        <Link className={styles.link} href={"blog"}>Галерея</Link>
        <Link className={styles.link} href={"about"}>Про нас</Link>
      </div>
  );
}
