import styles from "../styles/AppHeader.module.css";
import Link from "next/link";

function AppHeader() {
  return (
    <header className={styles.container}>
      <Link href="/">
        <a className={styles.link}>
          <h1>DevBuff</h1>
        </a>
      </Link>
    </header>
  );
}

export default AppHeader;
