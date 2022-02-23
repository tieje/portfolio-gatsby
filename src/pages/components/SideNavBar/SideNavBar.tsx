import React from "react"

const TopItems: string[] = [
    'home',
    'resumé',
    'symbols',
]
const BottomItems: string[] = [
    'semblance.us',
    'Holberton Headphones',
    'Frontend School Projects',
    'Backend School Projects',
    'Gates of Shell',
    'Stock Trading Bot',
    'Simple Lead Generator',
    'Broker Checker',
    'This Website!'
]


export const SideNavBar = () => {
    return (
        <nav className="bg-lightPink sticky left-0 md:w-3/12 w-3/4 h-screen z-10 top-0 content-center">
            <ul className="grid md:gap-4 gap-2 grid-rows place-content-center h-full">
                {TopItems.map((item: string) => {
                    return <SideNavBarItem item={item} />
                })}
                <hr></hr>
                {BottomItems.map((item: string) => {
                    return <SideNavBarItem item={item} />
                })}
            </ul>
        </nav>
    )
}

const SideNavBarItem = ({ item }: { item: string }) => {
    const ref = '#' + item.toLowerCase().replace(/ /g, '-')
    return (
        <li className="text-right">
            <a href={ref}>
                {item}
            </a>
        </li>
    )
}
