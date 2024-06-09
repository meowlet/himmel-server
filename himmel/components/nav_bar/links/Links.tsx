"use client"
import { useState, type ReactElement } from "react"
import styles from "./links.module.css"
import { MyLinkProps } from "@/interfaces/PropInterface"
import { NavLink } from "./nav_link/NavLink"

export function Links(): ReactElement {
  const links: Array<MyLinkProps> = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "About",
      path: "/about"
    },
    {
      title: "User",
      path: "/user"
    },
  ]

  const [isNavExpanded, setNavExpanded] = useState(false)

  return (
    <>

      <div className={styles.container}>
        {
          links.map((link) => (
            <NavLink title={link.title} path={link.path} key={link.path} ></NavLink>
          ))
        }
      </div>
      <div className={styles.menuButton} onClick={() => setNavExpanded(!isNavExpanded)}>{isNavExpanded ? "Close" : "Menu"}</div>
      {
        isNavExpanded &&
        <div className={styles.mobileContainer}>
          {
            links.map((link) => (
              <NavLink title={link.title} path={link.path} key={link.path} ></NavLink>
            ))
          }
        </div>
      }
    </>
  )
}
