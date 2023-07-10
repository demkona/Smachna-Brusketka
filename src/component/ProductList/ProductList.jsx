import Image from "next/image";
import hero from "./hero.png";
import styles from "./product.module.scss";
import Link from "next/link";

export default function ProductList() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link href={"/"} target="blank">
          <Image src={hero} width={200} height={200} alt="Hero"></Image>
          <h1 className={styles.title}>Антипаста</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Link>{" "}
      </li>
      <li className={styles.item}>
        <Link href={"/"} target="blank">
          <Image src={hero} width={200} height={200} alt="Hero"></Image>
          <h1 className={styles.title}>Антипаста</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Link>{" "}
      </li>
      <li className={styles.item}>
        <Link href={"/"} target="blank">
          <Image src={hero} width={200} height={200} alt="Hero"></Image>
          <h1 className={styles.title}>Антипаста</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Link>{" "}
      </li>
      <li className={styles.item}>
        <Link href={"/"} target="blank">
          <Image src={hero} width={200} height={200} alt="Hero"></Image>
          <h1 className={styles.title}>Антипаста</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Link>{" "}
      </li>
      <li className={styles.item}>
        <Link href={"/"} target="blank">
          <Image src={hero} width={200} height={200} alt="Hero"></Image>
          <h1 className={styles.title}>Антипаста</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Link>{" "}
      </li>
      <li className={styles.item}>
        <Link href={"/"} target="blank">
          <Image src={hero} width={200} height={200} alt="Hero"></Image>
          <h1 className={styles.title}>Антипаста</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Link>{" "}
      </li>
      <li className={styles.item}>
        <Link href={"/"} target="blank">
          <Image src={hero} width={200} height={200} alt="Hero"></Image>
          <h1 className={styles.title}>Антипаста</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Link>{" "}
      </li>
      <li className={styles.item}>
        <Link href={"/"} target="blank">
          <Image src={hero} width={200} height={200} alt="Hero"></Image>
          <h1 className={styles.title}>Антипаста</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Link>{" "}
      </li>
    </ul>
  );
}
