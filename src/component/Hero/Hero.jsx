import Image from "next/image";
import React from "react";
import hero from "./hero.png";
import styles from "./hero.module.scss";

export default function Hero() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        {" "}
        <Image src={hero} width={300} height={300}alt="Hero"></Image>
        <h1 className={styles.title}>Антипаста</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
          accumsan mauris. Maecenas sed justo.
        </p>
      </li>
      <li className={styles.item}>
        {" "}
        <Image src={hero} width={300} height={300} alt="Hero"></Image>
        <h1 className={styles.title}>Антипаста</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
          accumsan mauris. Maecenas sed justo.
        </p>
      </li>
      <li className={styles.item}>
        {" "}
        <Image src={hero} width={300} height={300} alt="Hero"></Image>
        <h1 className={styles.title}>Антипаста</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
          accumsan mauris. Maecenas sed justo.
        </p>
      </li>
      <li className={styles.item}>
        {" "}
        <Image src={hero} width={300} height={300} alt="Hero"></Image>
        <h1 className={styles.title}>Антипаста</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
          accumsan mauris. Maecenas sed justo.
        </p>
      </li>
      <li className={styles.item}>
        {" "}
        <Image src={hero} width={300} height={300} alt="Hero"></Image>
        <h1 className={styles.title}>Антипаста</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
          accumsan mauris. Maecenas sed justo.
        </p>
      </li>
      <li className={styles.item}>
        {" "}
        <Image src={hero} width={300} height={300} alt="Hero"></Image>
        <h1 className={styles.title}>Антипаста</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
          accumsan mauris. Maecenas sed justo.
        </p>
      </li>
    </ul>
  );
}
