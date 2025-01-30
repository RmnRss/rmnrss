import Link from "next/link"
import SEO from "../components/seo"

const NotFoundPage = () => {
  return (
    <>
      <SEO title="Page not found." />
      <body>
        <h1>Woopsies</h1>
        <Link href="/">Home Page</Link>
      </body>
    </>
  )
}

export default NotFoundPage
