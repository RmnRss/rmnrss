import { FC, ReactNode } from "react"

interface ExternalLinkProps {
  children: ReactNode
  href: string
  rel?: string
  target?: string
  className?: string
}

const ExternalLink: FC<ExternalLinkProps> = ({
  children,
  href,
  rel = "noreferrer noopener",
  target = "_blank",
  ...props
}) => {
  return (
    <a target={target} rel={rel} href={href} {...props}>
      {children}
    </a>
  )
}

export default ExternalLink
