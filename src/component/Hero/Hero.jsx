import Image from "next/image";
import React from "react";
import hero from "./hero.png";
import styles from "./hero.module.scss";
import Link from "next/link";

export default function Hero() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
      <Link href={'/'} target="blank">
      <Image src={hero} width={200} height={200}alt="Hero"></Image>
        <h1 className={styles.title}>Антипаста</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
          accumsan mauris. Maecenas sed justo.
        </p>
      </Link>
        {" "}
      </li>
      <li className={styles.item}>
      <Link href={'/'} target="blank">
      <Image src={hero} width={200} height={200}alt="Hero"></Image>
        <h1 className={styles.title}>Антипаста</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
          accumsan mauris. Maecenas sed justo.
        </p>
      </Link>
        {" "}
      </li>
      <li className={styles.item}>
      <Link href={'/'} target="blank">
      <Image src={hero} width={200} height={200}alt="Hero"></Image>
        <h1 className={styles.title}>Антипаста</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
          accumsan mauris. Maecenas sed justo.
        </p>
      </Link>
        {" "}
      </li>
      <li className={styles.item}>
      <Link href={'/'} target="blank">
      <Image src={hero} width={200} height={200}alt="Hero"></Image>
        <h1 className={styles.title}>Антипаста</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
          accumsan mauris. Maecenas sed justo.
        </p>
      </Link>
        {" "}
      </li>
      <li className={styles.item}>
      <Link href={'/'} target="blank">
      <Image src={hero} width={200} height={200}alt="Hero"></Image>
        <h1 className={styles.title}>Антипаста</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
          accumsan mauris. Maecenas sed justo.
        </p>
      </Link>
        {" "}
      </li>
      <li className={styles.item}>
      <Link href={'/'} target="blank">
      <Image src={hero} width={200} height={200}alt="Hero"></Image>
        <h1 className={styles.title}>Антипаста</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
          accumsan mauris. Maecenas sed justo.
        </p>
      </Link>
        {" "}
      </li>
      <li className={styles.item}>
      <Link href={'/'} target="blank">
      <Image src={hero} width={200} height={200}alt="Hero"></Image>
        <h1 className={styles.title}>Антипаста</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
          accumsan mauris. Maecenas sed justo.
        </p>
      </Link>
        {" "}
      </li>
      <li className={styles.item}>
      <Link href={'/'} target="blank">
      <Image src={hero} width={200} height={200}alt="Hero"></Image>
        <h1 className={styles.title}>Антипаста</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
          accumsan mauris. Maecenas sed justo.
        </p>
      </Link>
        {" "}
      </li>
    </ul>
  );
}
