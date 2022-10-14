import React, { useEffect } from "react";

function Nav(props) {
    const {
        sections=[],
        setCurrentSection,
        currentSection,
    } = props;

    useEffect(() => {document.title = currentSection;}, [currentSection]);

    return (
        <header className="flex-row">            
            <nav>
                <ul className="flex-row">
                <li className="mx-5">
                            <span>Test</span>
                        </li>
                  {sections.map((sections) => (
                    <li className={`mx-1 ${currentSection.name === sections.name && 'navActive'}`} key={sections.name}>
                    <span onClick={()=>{setCurrentSection(sections)}}>{(sections.name)}</span>                  
                  </li>
                  ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;