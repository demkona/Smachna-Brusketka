import Image from "next/image";
import product1 from "./product1.png";
import Link from "next/link";
import styles from "./productItem.module.scss";

export default function ProductItem() {
  return (
    <>
      <h1>Наші найкращі роботи</h1>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href={"/"} target="blank">
            <Image src={product1} width={200} height={200} alt="Hero"></Image>
          </Link>{" "}
        </li>
        <li className={styles.item}>
          <Link href={"/"} target="blank">
            <Image src={product1} width={200} height={200} alt="Hero"></Image>
          </Link>{" "}
        </li>
        <li className={styles.item}>
          <Link href={"/"} target="blank">
            <Image src={product1} width={200} height={200} alt="Hero"></Image>
          </Link>{" "}
        </li>
        <li className={styles.item}>
          <Link href={"/"} target="blank">
            <Image src={product1} width={200} height={200} alt="Hero"></Image>
          </Link>{" "}
        </li>
        <li className={styles.item}>
          <Link href={"/"} target="blank">
            <Image src={product1} width={200} height={200} alt="Hero"></Image>
          </Link>{" "}
        </li>
        <li className={styles.item}>
          <Link href={"/"} target="blank">
            <Image src={product1} width={200} height={200} alt="Hero"></Image>
          </Link>{" "}
        </li>
        <li className={styles.item}>
          <Link href={"/"} target="blank">
            <Image src={product1} width={200} height={200} alt="Hero"></Image>
          </Link>{" "}
        </li>
      </ul>
    </>
  );
}
