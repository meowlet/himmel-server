import { type ReactElement } from "react"
import styles from "./about.module.css"
import mainPic from "../../public/cover.jpg"
import Image from "next/image"

export default function AboutPage(): ReactElement {
  return <div className={styles.headerContainer}>
    <div className={styles.imgContainer}>
      <Image className={styles.image} src={mainPic} alt="The main pic" fill ></Image>
    </div>
    <div className={styles.browsingContainer}>
      nigger ass
    </div>
  </div>
}
