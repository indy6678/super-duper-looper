import React from "react";
import coverImage from '../../assets/images/aboutme/0.png';

function About() {
    return (
        <section className='my-1'>
            <h1 id='about'>
                About Me
            </h1>
            <img src={coverImage} className='my-1' style={{ width: '25%'}} alt='cover' />
        </section>
    )
}

export default About;