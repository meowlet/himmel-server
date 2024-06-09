import styles from "./home.module.css"
import mainPic from "../public/main.png"
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Himmel means Sky</h1>
        <p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className={styles.buttons}>
          <button className={styles.button}>Click here</button>
          <button className={styles.button}>Click now</button>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src={mainPic}
          alt="The takuji"
          fill
        ></Image>
      </div>
    </div>
  );
}
