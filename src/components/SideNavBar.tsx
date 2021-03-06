import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { nanoid } from "nanoid"
import { StaticImage } from "gatsby-plugin-image"
import { CreateIdTag } from "./utils/functions"
import { projectNode } from "./types/CommonTypes"

export const SideNavBar = () => {
    const projectTitles = useStaticQuery(graphql`
    query ProjectTitles {
        allProjectsJson {
          edges {
            node {
              title
            }
          }
        }
        allFile(filter: {extension: {eq: "pdf"}}) {
          edges {
            node {
              publicURL
              name
            }
          }
        }
      }
    `)
    return (
        <nav id="SideNavBar" className="bg-lightPink fixed left-0 md:w-3/12 w-3/4 h-screen z-10 top-0 md:visible invisible">
            <ul className="grid md:gap-4 gap-2 grid-rows content-center h-full px-10">
                <li className="text-right hover:underline underline-offset-4">
                    <a href="#home">
                        home
                    </a>
                </li>
                <li className="text-right hover:underline underline-offset-4">
                    <a href={projectTitles.allFile.edges[0].node.publicURL} download>
                        resumé
                    </a>
                </li>
                <li className="text-right">
                    <a href="https://github.com/tieje" title="Created by Dave Gandy - Flaticon">
                        <StaticImage
                            src="../images/github-character.png"
                            alt="github icon by Dave Gandy"
                            width={35}
                            height={35}
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/thomas-james-libiano-francis/"
                        title="Created by IconsBox - Flaticon"
                        className="pl-2"
                    >
                        <StaticImage
                            src="../images/linkedin.png"
                            alt="linkedin icon created by IconsBox - Flaticon"
                            width={35}
                            height={35}
                        />
                    </a>
                </li>
                <hr></hr>
                {projectTitles.allProjectsJson.edges.map((item: projectNode) => {
                    return <SideNavBarItem key={nanoid()} item={item.node.title} />
                })}
            </ul>
        </nav>
    )
}

const SideNavBarItem = ({ item }: { item: string }) => {
    const ref = '#' + CreateIdTag(item)
    return (
        <li className="text-right hover:underline underline-offset-4">
            <a href={ref}>
                {item}
            </a>
        </li>
    )
}
