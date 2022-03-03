import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export const HomeHeader = () => {
    return (
        <header id="home" className="grid place-content-center z-0 bg-lightBlue h-screen">
            <IntroCard />
        </header>
    )
}

const IntroCard = () => {
    const resume = useStaticQuery(graphql`
    query resume {
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
        <>
            <div className="grid grid-cols-1 gap-2">
                <StaticImage
                    src="../images/best.jpeg"
                    alt="my_profile"
                    height={500}
                    className="rounded-lg"
                />
                <h1 className="grid place-content-center text-2xl">
                    Thomas Francis
                </h1>
                <button className="text-white bg-orangeRed opacity-60 hover:opacity-75 rounded-md text-xl mx-10 h-10 shadow-md">
                    <a href={resume.allFile.edges[0].node.publicURL} download>
                        Fullstack Web Developer
                    </a>
                </button>
            </div>

        </>
    )
}
