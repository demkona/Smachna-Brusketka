import Image from "next/image";
import product1 from "./product1.png";
import product2 from "./product2.png";
import styles from "./product.module.scss";
import Link from "next/link";

export default function ProductList() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link href={"/"} target="blank">
          <Image src={product1} width={200} height={200} alt="Hero"></Image>
          <h1 className={styles.title}>Антипаста</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Link>{" "}
      </li>
      <li className={styles.item}>
        <Link href={"/"} target="blank">
          <Image src={product2} width={200} height={200} alt="Hero"></Image>
          <h1 className={styles.title}>Антипаста</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Link>{" "}
      </li>
      <li className={styles.item}>
        <Link href={"/"} target="blank">
          <Image src={product1} width={200} height={200} alt="Hero"></Image>
          <h1 className={styles.title}>Антипаста</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Link>{" "}
      </li>
      <li className={styles.item}>
        <Link href={"/"} target="blank">
          <Image src={product2} width={200} height={200} alt="Hero"></Image>
          <h1 className={styles.title}>Антипаста</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Link>{" "}
      </li>
      <li className={styles.item}>
        <Link href={"/"} target="blank">
          <Image src={product1} width={200} height={200} alt="Hero"></Image>
          <h1 className={styles.title}>Антипаста</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Link>{" "}
      </li>
      <li className={styles.item}>
        <Link href={"/"} target="blank">
          <Image src={product2} width={200} height={200} alt="Hero"></Image>
          <h1 className={styles.title}>Антипаста</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Link>{" "}
      </li>
      <li className={styles.item}>
        <Link href={"/"} target="blank">
          <Image src={product1} width={200} height={200} alt="Hero"></Image>
          <h1 className={styles.title}>Антипаста</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Link>{" "}
      </li>
      <li className={styles.item}>
        <Link href={"/"} target="blank">
          <Image src={product2} width={200} height={200} alt="Hero"></Image>
          <h1 className={styles.title}>Антипаста</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Link>{" "}
      </li>
    </ul>
  );
}
