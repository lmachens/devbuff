import styles from "../styles/AppHeader.module.css";
import Link from "next/link";
import Image from "next/image";

function AppHeader() {
  return (
    <header className={styles.container}>
      <Link href="/">
        <a className={styles.link}>
          <Image src="/logo.png" alt="" width={48} height={48} />
          <h1>DevBuff</h1>
        </a>
      </Link>
    </header>
  );
}

export default AppHeader;
