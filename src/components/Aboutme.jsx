import React from 'react'
import './Aboutme.css'
import profile from '../images/profile.jpg'

function Aboutme() {
    return (
        <div  className="container">
            <div className="aboutme">
                <div className="img__container">
                <div className="image">
                    <img src={profile} alt=""/>
                </div>
            </div>
            <div className="text__container">
                <h1 className="aboutme__text">About Me</h1>
                <p className="aboutme__paragraph">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Ipsa recusandae reprehenderit in impedit adipisci, doloremque quae ducimus quis 
                    facilis eius?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Ipsa recusandae reprehenderit in impedit adipisci, doloremque quae ducimus quis 
                    facilis eius?
                </p>
            </div>
            </div>
        </div>
    )
}

export default Aboutme
