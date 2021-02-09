import React from "react";
import Om from "../logocircle.png";
//import react-fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container">
                        <a className="navbar-brand" href="#"> <img className="logo" src={Om} alt="Logo no go ..." /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars}
                        style={{
                            color:"white",
                            size:"30px"
                        }}
                        />
                        </button>
                    
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">projects</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">portfolio</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Experience</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">contact</a>
                            </li>
                        </ul>
                        
                        </div>
                </div>
      </nav>
    )
}

export default Navbar
