import Image from "next/image";
import React from "react";
import hero from './hero.png'
import styles from "./hero.module.scss"

export default function Hero() {
  return (
    <div>
      <Image src={hero} width={360} height={360} alt="Hero"></Image>
      <p className={styles.title}>Антипаста</p>
      <Image src={hero} width={360} height={360} alt="Hero"></Image>
      <p className={styles.title}>Антипаста</p>
      <Image src={hero} width={360} height={360} alt="Hero"></Image>
      <p className={styles.title}>Антипаста</p>
      <Image src={hero} width={360} height={360} alt="Hero"></Image>
      <p className={styles.title}>Антипаста</p>
    </div>
  );
}
