import React,{ useEffect } from 'react'
import WOW from "wowjs";

import event from '../../assets/img/OSOC .png';

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
               <h2>Upcoming<span> Event</span></h2>
               </div>
              <div className="inner-about-content">
                <h5>Open Summer of Code 2023</h5>
                <p>Embrace the Open Source Adventure! Gear up for an exhilarating journey with OSoC (Open Source Opportunity for Enthusiasts), a thrilling month-long program that propels open source enthusiasts into the heart of real-world challenges. From July 7th to August 7th, unleash your passion and join a dynamic community without any participation restrictions. Dive into the electrifying atmosphere of our Discord hub, where brilliant minds converge to share ideas, seek guidance, and forge collaborations. Take charge of your destiny by handpicking an intriguing issue from our project list, claiming it as your own on the GitHub repository. As you boldly tackle the challenge, you'll unleash your potential and leave a lasting impact on the open source world. Join OSoC now, and let the adventure begin!
                </p>
                 <a href="/Osoc23" className="btn btn-style-two">Know More</a> 
                 </div>
              </div>
            </div>
          </div>
      </section>
  )
}

export default UpcomingEvent