import ExternalLink from "../components/ExternalLink"
import SEO from "../components/seo"

function IndexPage() {
  return (
    <>
      <SEO title="rmnrss.io" />
      <div className="w-full h-full flex flex-col flex-start items-start p-4">
        <article>
          {/* NAME & PRESENTATION */}
          <h1 className="text-md font-medium text-lightBlue">
            Romain Rousseau
          </h1>
          <p className="text-md text-lightBlue  max-w-lg font-normal ">
            Design engineer, currently{" "}
            <ExternalLink href="https://www.weenat.com">@Weenat</ExternalLink>!
          </p>

          {/* Work History */}
          <div>
            <h2 className="text-md text-lightBlue  max-w-lg font-normal">
              Work History
            </h2>
            <p className="text-md text-lightBlue  max-w-lg font-normal ">
              Design engineer, currently{" "}
              <ExternalLink href="https://www.weenat.com">@Weenat</ExternalLink>
              !
            </p>
            <p className="text-md text-lightBlue  max-w-lg font-normal ">
              Other stuff{" "}
              <ExternalLink href="https://www.weenat.com">@Weenat</ExternalLink>
              !
            </p>
            <p className="text-md text-lightBlue  max-w-lg font-normal ">
              Other stuff{" "}
              <ExternalLink href="https://www.weenat.com">@Weenat</ExternalLink>
              !
            </p>
          </div>

          {/* Writing */}
          <div>
            <h2 className="text-md text-lightBlue  max-w-lg font-normal">
              Writing
            </h2>
            <p className="text-md text-lightBlue  max-w-lg font-normal ">
              Add some writing here
            </p>
          </div>

          {/* CONNECT */}
          <div>
            <h2 className="text-md text-lightBlue  max-w-lg font-normal">
              Connect
            </h2>
            <div className="flex flex-row align-baseline gap-sm">
              <ExternalLink
                href="https://github.com/RmnRss"
                className="text-lg underline text-lightBlue mr-1 font-normal"
              >
                Github
              </ExternalLink>
              <ExternalLink
                href="https://www.linkedin.com/in/rmnrss/"
                className="text-lg underline text-lightBlue mr-1 font-normal"
              >
                Linkedin
              </ExternalLink>
            </div>
          </div>
        </article>
      </div>
    </>
  )
}

export default IndexPage
