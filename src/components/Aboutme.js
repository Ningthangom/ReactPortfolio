import React from "react"
import me from "../me2.jpg"

const Aboutme = () => {
    return (
        <div className="aboutme container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                        <div className="photo-wrap mb-5">
                        <img className ="propic" src={me} alt="profile pic no valiable ...."/> 
                        </div>
                </div>
                <div className="col-lg-6 col-xm-12 ">
                    <h1 className="meHeading"> About Me </h1>
                    <p>

                        Hello there! My name is Angelo. I am a full stack web developer. I just finised studying and excited to apply my knowledge 
                        in real world applications. 
                        The technologies I haved used are : 
                        <ul>
                            <li>- MERN (MongoDB, Express, React, Nodejs)</li>
                            <li> - API Interaction (api, json, ajax)</li>
                            <li>  - HTML</li>
                            <li> - CSS </li>
                            <li> - bootstrap</li>
                            <li> - Responsive Design </li>
                            <li> - handlebars</li>
                            <li> - jQuery and more</li>
                        </ul>
                    </p>
                </div>
            </div>  
         </div>
    )
}

export default Aboutme
