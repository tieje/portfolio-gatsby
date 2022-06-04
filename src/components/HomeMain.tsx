import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { nanoid } from "nanoid"
import { CreateIdTag, RandomInt } from "./utils/functions"
import { jsonNode } from "./types/CommonTypes"

const randomColors = {
    1: 'purple',
    2: 'orange',
    3: 'green',
    4: 'lightBlue',
    5: 'yellow'
}

export const HomeMain = () => {
    const projectData = useStaticQuery(graphql`
    query projectData {
        allProjectsJson {
          nodes {
            id
            title
            description
            link
            skills
            image {
              childImageSharp {
                gatsbyImageData(height: 300, placeholder: BLURRED)
              }
            }
          }
        }
      }
    `)
    return (
        <main className="z-0 grid">
            {projectData.allProjectsJson.nodes.map((node: jsonNode) => {
                return <PortfolioProject key={nanoid()} node={node} />
            })}
        </main>
    )
}

/* const color: string = randomColors[RandomInt(1,5)]
*/
const PortfolioProject = ({ node }: { node: jsonNode }) => {
    const TopClassNameProperties = "h-screen grid w-screen place-content-center bg-green lg:min-h-[700px"
    const idHTMLAttr: string = (node.title) ? CreateIdTag(node.title) : ''
    const description: string = (node.description) ? node.description : ''
    const title: string = (node.title) ? node.title : ''
    const link: string = (node.link) ? node.link : '#'
    const image = getImage(node.image)
    return (
        <div id={idHTMLAttr} className={TopClassNameProperties}>
            <div className="grid lg:gap-4 gap-3 place-content-center px-5 lg:px-0 lg:max-w-md">
                {<GatsbyImage image={image} alt={title} className='rounded-md' />}
                <div className="grid justify-center">
                    <button className="text-white bg-orangeRed opacity-60 hover:opacity-75 rounded-md lg:text-xl text-md lg:h-10 w-full px-2 shadow-md">
                        <a href={link} title={title}>
                            Go to Site
                        </a>
                    </button>
                </div>
                <div>
                    <h1 className="lg:text-xl">
                        {node.title}
                    </h1>
                </div>
                <hr></hr>
                <article>
                    <p className="indent-5">
                        {description}
                    </p>
                </article>
                <div>
                    <h1 className="lg:text-xl">
                        Key Skills
                    </h1>
                </div>
                <ul className="bg-white rounded-lg grid grid-cols-2 place-content-center">
                    {node.skills.map((skill: string) => {
                        return (<PortfolioSkill key={nanoid()} skill={skill} />)
                    })}
                </ul>
            </div>
        </div>
    )
}

const PortfolioSkill = ({ skill }: { skill: string }) => {
    return (
        <li className="px-5 py-3">
            {skill}
        </li>
    )
}
