import Head from "next/head"
import { FC } from "react"

interface SEOProps {
  description?: string
  title: string
}

const siteTitle = "Romain Rousseau"

const SEO: FC<SEOProps> = ({ description, title }) => {
  return (
    <Head>
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />
    </Head>
  )
}

export default SEO
