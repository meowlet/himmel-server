import { type ReactElement } from "react"
import styles from "./footer.module.css"

export function Footer(): ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Meow</div>
      <div className={styles.copyright}>{`Copyright © ${new Date().getFullYear()} | All rights reversed`}</div>
    </div>
  )
}
