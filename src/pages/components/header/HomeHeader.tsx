import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export const HomeHeader = () => {
    return (
        <header id="home" className="grid place-content-center md:pr-60 z-0 bg-pink h-screen">
            <IntroCard />
        </header>
    )
}

const IntroCard = () => {
    return (
        <div className="grid grid-cols-1 gap-2">
            <StaticImage
                src="../../../images/best.jpeg"
                alt="my_profile"
                height={500}
                className="rounded-lg"
            />
            <h1 className="grid place-content-center text-2xl">
                Thomas Francis
            </h1>
            <button className="text-white bg-orangeRed opacity-60 rounded-md text-xl mx-10 h-10">
                Fullstack Web Developer
            </button>
        </div>
    )
}
