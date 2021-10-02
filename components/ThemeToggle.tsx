import { useEffect, useState } from "react";
import Image from "next/image";
import darkModeSrc from "../public/dark-mode.svg";
import lightModeSrc from "../public/light-mode.svg";
import styles from "../styles/ThemeToggle.module.css";

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    if (document.body.classList.contains("dark")) {
      return true;
    }
    if (document.body.classList.contains("light")) {
      return false;
    }
    return prefersDarkScheme.matches;
  });

  useEffect(() => {
    function handler(event: MediaQueryListEvent) {
      document.body.classList.remove("dark");
      document.body.classList.remove("light");
      setDarkMode(event.matches);
    }
    prefersDarkScheme.addEventListener("change", handler);
    return () => prefersDarkScheme.removeEventListener("change", handler);
  }, []);

  function handleToggle() {
    if (darkMode) {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
    setDarkMode(!darkMode);
  }

  return (
    <button onClick={handleToggle} className={styles.button}>
      <Image
        src={darkMode ? lightModeSrc : darkModeSrc}
        alt={darkMode ? "Heller" : "Dunkler"}
      />
    </button>
  );
}

export default ThemeToggle;
