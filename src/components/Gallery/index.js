import React from "react";
import PhotoList from "../../Photolist";
// import About from "../About";

function Gallery(props) {
    const {currentSection} = props;
    return (
        <section>
            <h1>{currentSection.name}</h1>
            <p>{currentSection.description}</p>
            <PhotoList currentSection={currentSection.name}/>
        </section>
    )
}

export default Gallery;