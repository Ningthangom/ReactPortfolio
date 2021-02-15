import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
    return (
        <div className="services">
            <div  className="py-5">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon icon={faDesktop} size="2x"/>
                            </div> 
                            <h3>
                                Web Design
                            </h3>
                            <p>approch each project individullay and 
                                always focus on the result.
                            </p>
                        </div>
                    </div>
                    {/*  */}
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                    <FontAwesomeIcon icon={faFileCode} size="2x"/>
                            </div> 
                            <h3>
                                Web Development 
                            </h3>
                            <p>
                                Your website will be build with new proven technologies.
                            </p>
                        </div>
                    </div>
                    {/*  */}
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                    <FontAwesomeIcon icon={faFacebookF} size="2x"/>
                            </div> 
                            <h3>
                                facebook Ads
                            </h3>
                        </div>
                    </div>
                    {/*  */}
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                    <FontAwesomeIcon icon={faGoogle} size="2x"/>
                            </div> 
                            <h3>
                                google
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
