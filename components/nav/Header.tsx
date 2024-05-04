import Link from "next/link"
import { FC } from "react"

const Header: FC = () => {
  return (
    <>
      <header className={`w-full p-4 flex justify-center align-middle`}>
        <nav className="flex justify-self-center justify-center border rounded-full border-white max-w-4xl gap-2 p-3">
          <Link passHref href={"/"} className="pr font-normal" target="_self">
            rmnrss.io
          </Link>

          {/* <Link passHref href={"/"} className="pr font-normal" target="_self">
            Gallery
          </Link> */}
        </nav>
      </header>
    </>
  )
}

export default Header
