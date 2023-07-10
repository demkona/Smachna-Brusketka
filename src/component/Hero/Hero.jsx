import Image from "next/image";
import styles from "./hero.module.scss";

export default function Hero() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/e/e0/Grass_at_a_lawn_with_morning_dew_02.jpg")`,
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 className={styles.title}>Ви святкуєте - ми готуємо</h1>
      </div>
    </>
  );
}
