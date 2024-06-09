"use client"
import { useEffect, useState, type ReactElement } from "react"
import { Links } from "./links/Links"
import styles from "./nav_bar.module.css"

export function NavBar(): ReactElement {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <div className={`${styles.container} ${isScrolled && styles.containerScrolled}`}>
    <div className={styles.logo}>Logo</div>
    <div>
      <Links />
    </div>
  </div>
}
