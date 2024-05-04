import SEO from "../components/seo"
import FullscreenLayout from "../layouts/FullscreenLayout"

function IndexPage() {
  return (
    <>
      <SEO title="rmnrss.io" />
      <FullscreenLayout title="rmnrss.io">
        <div className="w-full h-full flex flex-col justify-center items-center p-4">
          <h1 className="text-4xl font-bold text-lightBlue text-center mb-8">
            Hello there!
          </h1>
          <p className="text-lg text-lightBlue text-center max-w-lg font-normal ">
            I'm Romain, I'm a 28 years old design engineer, currently working at
            Weenat!
          </p>
          <p className="text-lg text-lightBlue text-center max-w-lg font-normal">
            I might throw random content or stuff I'm passionate about one day.
          </p>
          <a
            href="https://github.com/RmnRss"
            target="_blank"
            className="text-lg text-lightBlue text-center max-w-lg font-normal"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/rmnrss/"
            target="_blank"
            className="text-lg text-lightBlue text-center max-w-lg font-normal"
          >
            Linkedin
          </a>
          {/* <p className="text-lg text-lightBlue text-center max-w-lg font-normal">
            Until that day arrives, you can play with our good friend the
            procrastination cube below!
          </p>
          <div className="m-auto">
            <ProcrastinationCube />
          </div>
          <div className="mt-auto align-bottom">
            <Keyboard />
          </div> */}
        </div>
      </FullscreenLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 3000,
  }
}

export default IndexPage
