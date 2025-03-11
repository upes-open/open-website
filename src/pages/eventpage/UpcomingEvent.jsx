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

                <img width="510px" height="530px" src="https://i.postimg.cc/x8PYjMs4/val-1.png" className="wow fadeInRight" data-wow-delay=".3s" alt="" style={{ maxWidth: '100%', height: '460px' }}  />

              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="section-title title-style-three black-title text-center mb-70"> 
                 <h2>UPCOMING<span>  EVENT</span></h2>
               </div>
              <div className="inner-about-content">
                <a href="/osoc23"><h5>Right on Dart: The Flutter Workshop</h5></a>
                <p> A game will be played amongst the college students in teams of 5. Each team needs to play against every team according to the leaderboard, which will be made.
                &nbsp;<a href="">Read More!</a>
                </p>
                <br />
                 <a href="/valorant_register" className="btn btn-style-two">Register Now!</a>
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
