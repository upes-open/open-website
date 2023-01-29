import React from 'react';
import CountUp from "react-countup";



export default function Counter() {


  return (
	    <div className="fact-area pt-90">
            <div className="row justify-content-center">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="fact-item">
                  <div className="fact-icon">
                    <img src="assets/img/icon/icon-sponsors.png" alt="" />
                  </div>
                  <div className="counter-item">
                    <h2 className="counter"><span>< CountUp end={7} /></span></h2>
                    <span>Sponsors</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="fact-item">
                  <div className="fact-icon">
                    <img src="assets/img/icon/icon-project.png" alt="" />
                  </div>
                  <div className="counter-item">
                    <h2 className="counter"><span> < CountUp end={35} /> </span></h2>
                    <span>Projects</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="fact-item">
                  <div className="fact-icon">
                    <img src="assets/img/icon/icon-workshops.png" alt="" />
                  </div>
                  <div className="counter-item">
                    <h2 className="counter"><span >< CountUp end={45} /></span></h2>
                    <span>Workshops</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="fact-item">
                  <div className="fact-icon">
                    <img src="assets/img/icon/icon-team.png" alt="" />
                  </div>
                  <div className="counter-item">
                    <h2 className="counter"><span>< CountUp end={150} /></span></h2>
                    <span>Team</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}
