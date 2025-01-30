import { FC } from "react"
import theme, { Color } from "../styles/theme"

interface ProcrastinationCubeProps {
  width?: number
  height?: number
  color?: Color
}

const ProcrastinationCube: FC<ProcrastinationCubeProps> = ({
  width = 32,
  height = 32,
  color = "accentBlue",
}) => {
  const colors = theme.colors

  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill={colors[color]} />
      <circle cx="10" cy="12" r="2" fill={colors.light} />
      <circle cx="23" cy="12" r="2" fill={colors.light} />
    </svg>
  )
}

export default ProcrastinationCube
