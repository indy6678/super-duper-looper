import React, { useEffect } from "react";

function Nav(props) {
    const {
        sections=[],
        setCurrentSection,
        currentSection,
    } = props

    useEffect(()=> {
        document.title = currentSection;
    }, [currentSection]);

    return (
        <header>            
            <nav>
                <ul className="flex-row">
                  {sections.map((sections) => (
                    <li className={`${currentSection.name === sections.name && 'navActive'}`} key={sections.name}>
                    <span onClick={()=>{setCurrentSection(sections)}}>{(sections.name)}</span>                  
                  </li>
                  ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;