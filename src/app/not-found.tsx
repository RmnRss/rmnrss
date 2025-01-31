import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "404 | Romain Rousseau",
  description: "My Portfolio Website",
}

const NotFoundPage = () => {
  return (
    <body>
      <h1>Woopsies</h1>
      <Link href="/">Home Page</Link>
    </body>
  )
}

export default NotFoundPage
