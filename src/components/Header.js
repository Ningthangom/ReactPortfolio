import React from "react"
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info"> 
                <h1>Main contents</h1>
                <Typed
                className="typed-text"
                strings={["web design", "MERN stack web development", "MySQL","API Interaction"]}
            //    this speed is for when writing up
                typeSpeed={30}
                // speed for deleting 
                backSpeed={40}
                // this will loop the array without stoping
                loop
                
                />
                <a href="#" className="contact-button"> contact me</a>
            </div>
        </div>
    )
}

export default Header
