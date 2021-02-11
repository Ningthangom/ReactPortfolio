import React from "react";
import Om from "../logocircle.png";
//import react-fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"


const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="container-fluid">
            
          <a class="navbar-brand" href="#"> 
            <img className="logo" src={Om}>
            </img></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse navbaritems" id="navbarNavDropdown">
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
