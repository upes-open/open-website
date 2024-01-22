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

                <img width="510px" height="530px" src={event} className="wow fadeInRight" data-wow-delay=".3s" alt="" style={{ maxWidth: '100%', height: 'auto' }}  />

              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="section-title title-style-three black-title text-center mb-70"> 
                 <h2>UPCOMING<span>  EVENT</span></h2>
               </div>
              <div className="inner-about-content">
                <h5>ContainerCraft: Unleashing the power of Docker and linux</h5>
                <p> The workshop is on 24th jan ad 31st jan from 2pm to 5pm.Venue will be shared soon.
                  Bring your laptops charged for smooth hands on experience. 
                </p>
                 <a href="register" className="btn btn-style-two">Register Now!</a>
                 {/*<a href="/Feedback" className="btn btn-style-two">Feedback</a>*/}
                 </div>
              </div>
            </div>
          </div>
      </section>
  )
}

export default UpcomingEvent
