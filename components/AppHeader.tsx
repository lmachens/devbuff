import styles from "../styles/AppHeader.module.css";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import LogoSrc from "../public/logo.png";

const ThemeToggleAsync = dynamic(() => import("./ThemeToggle"), { ssr: false });

function AppHeader() {
  return (
    <header className={styles.container}>
      <Link href="/">
        <a className={styles.link}>
          <Image src={LogoSrc} alt="" width={48} height={48} className="logo" />
          <h1>DevBuff</h1>
        </a>
      </Link>
      <ThemeToggleAsync />
    </header>
  );
}

export default AppHeader;
