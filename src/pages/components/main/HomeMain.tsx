/* import { GatsbyImage, getImage } from "gatsby-plugin-image" */
import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { nanoid } from "nanoid"
import { CreateIdTag } from "../../../utils/functions"
import { jsonNode } from "../../../types/CommonTypes"

export const HomeMain = () => {
    const projectData = useStaticQuery(graphql`
    query projectData {
        allFile {
          edges {
            node {
              relativePath
              childrenImageSharp {
                id
                gatsbyImageData
              }
              childrenProjectsJson {
                id
                description
                skills
                title
                image
              }
            }
          }
        }
      }
    `)
    return (
        <main className="z-0 grid">
            {projectData.allFile.edges.node.map((node: jsonNode) => {
                return <PortfolioProject key={nanoid()} node={node} images={projectData.allImageSharp.nodes} />
            })}
        </main>
    )
}

const PortfolioProject = ({ node, images }) => {
    const idHTMLAttr: string = (node.title) ? CreateIdTag(node.title) : ''
    const description: string = (node.description) ? node.description : ''
    const title: string = (node.title) ? node.title : ''
    const link: string = (node.link) ? node.link : '#'
    return (
        <div id={idHTMLAttr} className="h-screen bg-green grid w-screen place-content-center">
            <div className="grid md:gap-4 gap-3 place-content-center px-5 md:px-0 md:max-w-md">
                <div>picture placeholder</div>
                <div className="grid justify-center">
                    <button className="text-white bg-orangeRed opacity-60 hover:opacity-75 rounded-md md:text-xl text-md md:h-10 w-full px-2 shadow-md">
                        <a href={link} title={title}>
                            Go to Site
                        </a>
                    </button>
                </div>
                <div>
                    <h1 className="md:text-xl">
                        {node.title}
                    </h1>
                </div>
                <hr></hr>
                <article>
                    <p className="indent-5">
                        {description}
                    </p>
                </article>
            </div>
        </div>
    )
}

/*
const PortfolioProject = ({ node }: { node: jsonNode }) => {
    const idHTMLAttr: string = (node.title) ? CreateIdTag(node.title) : ''
    const description: string = (node.description) ? node.description : ''
    const title: string = (node.title) ? node.title : ''
    const link: string = (node.link) ? node.link : '#'
    return (
        <div id={idHTMLAttr} className="h-screen bg-green grid w-screen place-content-center">
            <div className="grid md:gap-4 gap-3 place-content-center px-5 md:px-0 md:max-w-md">
                <div>picture placeholder</div>
                <div className="grid justify-center">
                    <button className="text-white bg-orangeRed opacity-60 hover:opacity-75 rounded-md md:text-xl text-md md:h-10 w-full px-2 shadow-md">
                        <a href={link} title={title}>
                            Go to Site
                        </a>
                    </button>
                </div>
                <div>
                    <h1 className="md:text-xl">
                        {node.title}
                    </h1>
                </div>
                <hr></hr>
                <article>
                    <p className="indent-5">
                        {description}
                    </p>
                </article>
            </div>
        </div>
    )
}
*/