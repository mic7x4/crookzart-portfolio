import React from 'react'
import './Hero.css';
import Typed from 'react-typed';


function Hero() {
    return (
        <div className="hero__wrapper">
            <div className="main__info">
                <h1>Full Stack Designer</h1>
                <Typed
                    className="hero__typed"
                    strings={["UI/UX Designer","FrontEnd Designer","Content Creator"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn__main__offer">Contact Us</a>
            </div>
        </div>
    )
}

export default Hero
