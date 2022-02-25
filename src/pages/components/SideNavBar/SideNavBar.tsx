import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { nanoid } from "nanoid"

const GenericItems: string[] = [
    'home',
    'resumé',
    'symbols',
]

type Node = {
    title: string
}
type projectNode = {
    node: Node
}

export const SideNavBar = () => {
    const projectTitles = useStaticQuery(graphql`query ProjectTitles {
        allProjectsJson {
          edges {
            node {
              title
            }
          }
        }
      }`
    )
    return (
        <nav className="bg-lightPink fixed left-0 md:w-3/12 w-3/4 h-screen z-10 top-0 md:visible invisible">
            <ul className="grid md:gap-4 gap-2 grid-rows content-center h-full px-10">
                {GenericItems.map((item: string) => {
                    return <SideNavBarItem key={nanoid()} item={item} />
                })}
                <hr></hr>
                {projectTitles.allProjectsJson.edges.map((item: projectNode) => {
                    return <SideNavBarItem key={nanoid()} item={item.node.title} />
                })}
            </ul>
        </nav>
    )
}

const SideNavBarItem = ({ item }: { item: string }) => {
    const ref = '#' + item.toLowerCase().replace(/[ \.\\]/g, '-')
    return (
        <li className="text-right">
            <a href={ref}>
                {item}
            </a>
        </li>
    )
}
