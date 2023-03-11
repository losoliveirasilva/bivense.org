import Link from "next/link";
import styles from "./header.module.css";

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerTitle}>Atlético Bivense</div>

    <div></div>

    <nav className={styles.headerLinks}>
      <Link className={styles.headerLink} href="/">
        Início
      </Link>
      <Link className={styles.headerLink} href="/bivensialismo/">
        Bivensialismo
      </Link>
    </nav>
  </header>
);
