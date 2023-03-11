import Image from "next/image";
import styles from "./page.module.css";

const Home = () => (
  <div className={styles.logoWrapper}>
    <Image src="/escudo.svg" alt="escudo" height={320} width={320} />

    <div className={styles.constructionContainer}>
      <Image
        className={styles.tractor}
        src="/tractor.svg"
        alt="tractor"
        height={32}
        width={32}
      />

      <span>Em construção...</span>
    </div>
  </div>
);

export default Home;
