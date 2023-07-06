import React from "react";
import styles from "./footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import telegram from "./telegram.png";
import instagram from "./instagram.png";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <Link href={"./"} className={styles.text}>
        Smachna<span className={styles.textSpan}>Brusketka</span>
      </Link>
      <Link
        className={styles.link}
        href={"https://goo.gl/maps/2XPxpgPmw3F4hNPZ8"}
        target="blank"
      >
        с. Крюківщина, вул. Одеська 25/а
      </Link>
      <Link className={styles.link} href={"mailto:smachna.brusketka@gmail.com"}>
        smachna.brusketka@gmail.com
      </Link>
      <Link className={styles.link} href={"tel:+380967843584"}>
        +380 96 784 35 84
      </Link>
      <Link className={styles.link} href={"tel:+380500522381"}>
        +380 50 052 23 81
      </Link>
      <div>
        <Link className={styles.telegram} href="https://t.me/Smachna_Brusketka" target="blank">
          <Image src={telegram} width={20} height={20} alt="telegram" />
        </Link>
        <Link
          href="https://www.instagram.com/smachna_brusketka/"
          target="blank"
        >
          <Image src={instagram} width={20} height={20} alt="instagram" />
        </Link>
      </div>
      <p className={styles.copyright}>©2023 || with ❤️ from SmachnaBrusketka</p>
    </footer>
  );
}
