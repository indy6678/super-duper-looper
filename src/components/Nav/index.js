import React, { useEffect } from "react";

function Nav(props) {
    const {
        sections = [],
        setCurrentSection,
        currentSection,
    } = props

    useEffect(() => {
        document.title = currentSection.name;
    }, [currentSection]);

    return (
        <header className="flex-row">
            <h1>
                <a href='/'>Eduardo Sanchez</a>
            </h1>
            <nav>
                <ul className="flex-row">
                    {/* <li className="mx-1">
                        <a href="#about">About Me</a>
                    </li> */}
                    {sections.map((section) => (
                        <li className={`mx-1 ${currentSection.name === section.name && 'navActive'}`} key={section.name}>
                            <span onClick={() => { setCurrentSection(section) }}>{section.name}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;