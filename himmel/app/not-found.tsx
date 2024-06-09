import Link from "next/link"
import { type ReactElement } from "react"

export default function NotFound(): ReactElement {
  return <>
    <h2>Not Found</h2>
    <p>The page you are trying to reach is not found</p>
    <Link href="/">Go Home</Link>
  </>
}
