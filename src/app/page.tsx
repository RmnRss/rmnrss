import WorkExperience from "@/components/WorkExperience"
import ExternalLink from "../components/ExternalLink"

function IndexPage() {
  return (
    <>
      <div className="w-full h-full flex flex-col flex-start items-start p-4">
        <article>
          {/* NAME & PRESENTATION */}
          <h1 className="font-main text-md font-medium text-white mb-4">
            Romain Rousseau
          </h1>
          <p className="text-base text-white max-w-lg font-normal mb-[1.8rem]">
            I'm a design engineer who believes technology should seamlessly
            enhance human experience. My passion lies in <i>crafting</i>{" "}
            beautiful, satisfying, and intuitive interfaces that adapt to user
            needs, not the other way around. I approach design with the
            conviction that great technology should feel natural and empowering.
          </p>

          {/* Work History */}
          <div>
            <h2 className="text-md text-gray max-w-lg font-normal">
              Work History
            </h2>
            <WorkExperience
              name="Weenat"
              post={"Design engineer"}
              href="https://www.weenat.com"
              end={null}
              start={new Date("January 1, 2021")}
            >
              <ul>
                <li>Developed cross-platform app (React Native, React JS) </li>
                <li>Created and maintained the Design System</li>
                <li>Implemented complex data visualizations using D3.js</li>
                <li>
                  Designed and build performant map/list views with markers
                </li>
                <li>Handled app internationalization</li>
                <li>
                  Led design strategy, from user research to feature design
                </li>
                <li>Pushed design-centric product decision-making</li>
                <li>Many Other!</li>
              </ul>
            </WorkExperience>
            <WorkExperience
              name="Miles"
              post={"Front-end developer"}
              href="https://www.weenat.com"
              start={new Date("May 1, 2020")}
              end={new Date("November 1, 2020")}
            >
              <div>
                <p>Led AstroPlant's online platform development by:</p>
                <ul>
                  <li>Conducting user research</li>
                  <li>Designing scalable architecture and UI in Figma</li>
                  <li>Developing back-end (Strapi) and web app (Next.js)</li>
                  <li>
                    Deploying on Kubernetes Creating open-source project
                    documentation
                  </li>
                </ul>
              </div>
              <p>
                Also worked on the{" "}
                <ExternalLink
                  href={"https://www.fivebrothersfat.nl/"}
                >{`Five Brothers Fat Website`}</ExternalLink>
              </p>
            </WorkExperience>
          </div>

          {/* Writing */}
          <div>
            <h2 className="text-md text-gray  max-w-lg font-normal">Writing</h2>
            <p className="text-md text-white  max-w-lg font-normal ">
              Add some writing here
            </p>
          </div>

          {/* CONNECT */}
          <div>
            <h2 className="text-md text-gray max-w-lg font-normal">Connect</h2>
            <div className="flex flex-row align-baseline">
              <ExternalLink
                href="https://github.com/RmnRss"
                className="underline mr-3 font-normal"
              >
                Github ↗
              </ExternalLink>
              <ExternalLink
                href="https://www.linkedin.com/in/rmnrss/"
                className="underline mr-3 font-normal"
              >
                Linkedin ↗
              </ExternalLink>
            </div>
          </div>
        </article>
      </div>
    </>
  )
}

export default IndexPage
