import React from "react";
import image from '../../assets/images/me.PNG'

function About() {
    return (
        <section className='my-10'>
            <h1 id='about'>
                About Me
            </h1>
            <img src={image} className='' style={{ width: '25%'}} alt='cover' />
        </section>
    )
}

export default About;