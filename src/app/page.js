import Header from "@/component/Header/Header";
import styles from "./page.module.scss";
import Footer from "@/component/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>Started big project</h1>
      </main>
      <Footer/>
    </>
  );
}
