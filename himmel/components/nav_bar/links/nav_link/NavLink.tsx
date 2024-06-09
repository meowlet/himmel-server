"use client"
import { MyLinkProps } from "@/interfaces/PropInterface"
import styles from "./nav_link.module.css"
import { type ReactElement } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function NavLink(link: MyLinkProps): ReactElement {
  const path = usePathname()
  return <>
    <Link href={link.path} className={
      `${styles.button} ${(path === link.path && styles.isActive)}`
    } >{link.title}</Link>
  </>
}
