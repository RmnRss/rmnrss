import { FC } from "react"
import SEO from "../components/seo"

interface FullPageLayoutProps {
  description?: string
  title: string
}

const FullscreenLayout: FC<FullPageLayoutProps> = ({
  children,
  description,
  title,
}) => {
  return (
    <>
      <SEO title={title} description={description} />
      <div className="fullscreen">
        <div className="main-grid">{children}</div>
      </div>
    </>
  )
}

export default FullscreenLayout
