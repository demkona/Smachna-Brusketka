import React from "react";
import Image from "next/image";
import logo from "./logo.jpg";
import styles from "./logo.module.scss";
import Link from "next/link";

export default function Logo() {
  return (
    <div className={styles.container}>
      <Link className={styles.img} href="/">
        <Image src={logo} width={70} height={70} alt="logo"/>
      </Link>
      <p className={styles.text}>Smachna<span className={styles.textSpan}>Brusketka</span></p>
    </div>
  );
}
