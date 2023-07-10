import Image from "next/image";
import about from "./about.png";
import styles from "./page.module.scss";

export default function About() {
  return (
    <div className={styles.container}>
      <h1>Про нас</h1>
      <Image src={about} alt="About">
      </Image>
    </div>
  );
}
