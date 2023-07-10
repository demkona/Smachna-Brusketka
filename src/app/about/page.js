import Image from "next/image";
import about from "./about.png";
import styles from "./page.module.scss";

export default function About() {
  return (
    <div className={styles.container}>
      <Image src={about} alt="About">
      </Image>
    </div>
  );
}
