import React,{ useEffect } from 'react'
import WOW from "wowjs";

import event from '../../assets/img/images/container_craft.png';

function UpcomingEvent() {
  useEffect(()=>{
    new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: false,
      live: true,
      loop:Infinity,
    }).init();
  
    },[])
  return (
	<section className="inner-about-area fix">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
              <div className="inner-about-img">

                <img width="510px" height="530px" src="src/assets/img/flutter2025.png" className="wow fadeInRight" data-wow-delay=".3s" alt="" style={{ maxWidth: '100%', height: '460px' }}  />

              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="section-title title-style-three black-title text-center mb-70"> 
               </div>
              <div className="inner-about-content">
                <a href="/osoc23">Right on Dart: The Flutter Workshop</a>
                <p> "Great apps aren’t just built—they’re crafted, line by line, with curiosity and a bit of magic.🚀 Join us for an exciting workshop!Dates: 24th & 25th March
                </p>
                 <a href="https://forms.gle/Zf1hgfkK2uPaN8re9" className="btn btn-style-two" target="_blank">Register Now!</a>
                 {/* <a href="https://github.com/upes-open" className="btn btn-style-two" target="_blank">GitHub</a> */}
                 <br />
                 <br />
                 {/* <a href="/leaderboard" className="btn btn-style-two">Leaderboard</a>
                 <a href="/discord" className="btn btn-style-two" target="_blank">Discord</a> */}
                 </div>
              </div>
            </div>
          </div>
      </section>
  )
}

export default UpcomingEvent
