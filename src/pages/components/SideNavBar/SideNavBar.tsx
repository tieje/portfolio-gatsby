import React from "react"

export const SideNavBar = () => {
    return (
        <nav className="bg-lightPink sticky left-0 md:w-3/12 w-3/4 h-screen z-10 top-0 content-center">
            <ul className="grid md:gap-4 gap-2 grid-rows place-content-center h-full">
                <li className="text-right">
                    <a href="#home">
                        Home
                    </a>
                </li>
                <li className="text-right">
                    resumé
                </li>
                <li className="text-right">
                    github symbol, linkedin symbol
                </li>
                <hr></hr>
                <li className="text-right">
                    semblance.us
                </li>
            </ul>
        </nav>
    )
}
/*
const SideNavBarItem = () => {
    const items: Array<String> = [
        'home',
        'resumé',
        'symbols',
        'semblance.us',
    ]
    return (
        <li className="text-right">

    )
}
*/