import type { ReactNode } from "react";
import styles from "../styles/Badge.module.css";

type BadgeProps = {
  children: ReactNode;
};
function Badge({ children }: BadgeProps) {
  return <span className={styles.badge}>{children}</span>;
}

export default Badge;
