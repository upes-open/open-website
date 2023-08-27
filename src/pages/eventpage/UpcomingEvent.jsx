import React,{ useEffect } from 'react'
import WOW from "wowjs";

import event from '../../assets/img/leaderboard.png';

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

                <img width="550px" height="600px" src={event} className="wow fadeInRight" data-wow-delay=".3s" alt="" />

              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="section-title title-style-three black-title text-center mb-70"> 
                 <h2>IT'S A<span>  WRAP</span></h2>
               </div>
              <div className="inner-about-content">
                <h5>Open Summer of Code 2023</h5>
                <p>OPEN Summer of Code, a yearly event, occurred from July 7 to August 13, 2023. Drawing participation from 300+ students across 100+ colleges globally, including prestigious institutions like IIT and NIT, this event offered diverse tech projects. Repositories were publicly available on OPEN's GitHub, fostering collaborative development. The program featured interactive Saturday events for fun and learning, with weekly leaderboards announced. Top participants earned Amazon Vouchers, with prizes of 3500 INR for the winner, 2000 INR for the runner-up, and 1500 INR for the second runner-up. Project stacks spanned React.js, Node.js, Flutter, Machine Learning, Django, and cloud/devOps tools.
                </p>
                 <a href="/Osoc23" className="btn btn-style-two">Know More</a> 
                 <a href="/Feedback" className="btn btn-style-two">Feedback</a>
                 </div>
              </div>
            </div>
          </div>
      </section>
  )
}

export default UpcomingEvent
