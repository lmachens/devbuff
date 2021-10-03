import {
  createElement,
  ReactHTML,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styles from "../styles/AnimatedElement.module.css";

type AnimatedElementProps = {
  type: keyof ReactHTML;
  children: ReactNode;
  className?: string;
  id?: string;
};

function AnimatedElement({
  type,
  children,
  className,
  id,
}: AnimatedElementProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }
    const handleScroll = () => {
      setIsVisible(
        window.pageYOffset + window.innerHeight > container.offsetTop &&
          window.pageYOffset < container.offsetTop + container.offsetHeight
      );
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const element = useMemo(
    () =>
      createElement(
        type,
        {
          ref: containerRef,
          className: `${className} ${styles.container} ${
            isVisible ? styles.inside : ""
          }`,
          id: id,
        },
        children
      ),
    [children, className, id, isVisible, type]
  );

  return element;
}

export default AnimatedElement;
