import { FC, ReactNode } from "react"

interface FullPageLayoutProps {
  children: ReactNode
}

const FullscreenLayout: FC<FullPageLayoutProps> = ({ children }) => {
  return (
    <div className="fullscreen">
      <div className="main-grid">{children}</div>
    </div>
  )
}

export default FullscreenLayout
