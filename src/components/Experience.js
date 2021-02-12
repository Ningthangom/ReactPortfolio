import React from 'react'

const Experience = () => {
    return (
        <div className="experience">
            <div className="d-flex justify-content-center my-5">
            <h1>Experience</h1>
            </div>
            <div className="container experience-wrapper">
                {/*  */}
              <div className="timeline-block timeline-block-right">
                    <div className="marker">
                    </div>
                    <div className= "timeline-content">
                        <h3>2020-2021(fullstack bootstrap)</h3>
                        <p>bootcamp </p>
                    </div>
              </div>
              {/*  */}
              <div className="timeline-block timeline-block-left">
                    <div className="marker">
                    </div>
                    <div className= "timeline-content">
                        <h3>2021-2030</h3>
                        <p>Computer science is the study of algorithmic processes, computational machines and computation itself.[1] As a discipline, computer science spans a range of topics from theoretical studies of algorithms, computation and information to the practical issues of implementing 
                            computational systems in hardware and software.[2][3]</p>
                    </div>
              </div>
                   {/*  */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker">
                    </div>
                    <div className= "timeline-content">
                        <h3>2030-2036</h3>
                        <p>where ??</p>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Experience
