import type { Metadata } from "next"
import { Urbanist } from "next/font/google"
import FullscreenLayout from "../layouts/FullscreenLayout"
import "./global.css"

const urbanist = Urbanist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Romain Rousseau",
  description: "My Portfolio Website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={urbanist.className}>
      <body>
        <FullscreenLayout title="rmnrss.io">{children}</FullscreenLayout>
      </body>
    </html>
  )
}
