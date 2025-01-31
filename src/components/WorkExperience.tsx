import { format } from "date-fns"
import { FC, ReactNode } from "react"
import ExternalLink from "./ExternalLink"

interface WorkExperienceProps {
  post: string
  name: string
  start: Date
  end: Date | null
  children: ReactNode
  href: string
}

const WorkExperience: FC<WorkExperienceProps> = ({
  name,
  start,
  end,
  children,
  post,
  href,
}) => {
  return (
    <div className="mb-7">
      <div className="flex flex-row items-baseline justify-between mb-2">
        <p className="text-base text-white max-w-lg font-normal ">
          {post} <ExternalLink href={href}>{`@${name}`}</ExternalLink>
        </p>
        <div className="flex flex-row items-baseline justify-between">
          <p className="text-gray">{format(start, "MMMM uuu")}</p>
          <span className="text-gray mx-1">-</span>
          <p className="text-gray">
            {end === null ? "Ongoing" : format(end, "MMMM uuu")}
          </p>
        </div>
      </div>
      <p>{children}</p>
    </div>
  )
}

export default WorkExperience
