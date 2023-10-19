import React,{ useEffect } from 'react'
import WOW from "wowjs";

import event from '../../assets/img/images/the_box.jpg';

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

                <img width="550px" height="600px" src={event} className="wow fadeInRight" data-wow-delay=".3s" alt="" style={{ maxWidth: '100%', height: 'auto' }}  />

              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="section-title title-style-three black-title text-center mb-70"> 
                 <h2>UPCOMING<span>  EVENT</span></h2>
               </div>
              <div className="inner-about-content">
                <h5>The Box</h5>
                <p>Join us for 'The Box' workshop on October 27th, 2023, hosted by OPEN Community, and unleash your creative potential in the world of design, innovation, and tech. This event is not just for designers but for all tech enthusiasts looking to expand their horizons.

Discover the power of design and its applicability in any field. Learn how practice enhances creativity, a fundamental element of exceptional design. Master the principles of design thinking to create standout tech solutions. 

In today's fast-paced world, thinking outside the box is crucial. 'The Box' workshop encourages you to let your creative ideas flow and equips you to create innovative solutions. Led by the talented Navinya Sawarkar, this workshop is a must-attend for anyone looking to push their boundaries and redefine their approach to design and tech.

Don't miss out on this opportunity to revitalize your tech creativity. 
                </p>
                 <a href="https://forms.gle/19yqZo5aMPrfHFE1A" className="btn btn-style-two">Register Now!</a>
                 {/*<a href="/Feedback" className="btn btn-style-two">Feedback</a>*/}
                 </div>
              </div>
            </div>
          </div>
      </section>
  )
}

export default UpcomingEvent
