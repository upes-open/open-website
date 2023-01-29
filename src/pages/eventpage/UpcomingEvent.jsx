import React,{ useEffect } from 'react'
import WOW from "wowjs";

import event from '../../assets/img/upcoming-event.png';

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
                <img width="600px" height="450px" src={event} className="wow fadeInRight" data-wow-delay=".3s" alt="" />
                {/* <img src="https://i.postimg.cc/PqKjMvZv/2-BDF9713-7-E73-45-DC-8-DFC-301-F39382506-1.png" className="wow fadeInLeft" data-wow-delay=".6s" alt="" /> */}
                {/* <img src="https://i.postimg.cc/gJR1TwLK/38-EA0514-335-A-4-A37-9405-6880-F0-A95-E26-1.png" className="wow fadeInUp" data-wow-delay=".6s" alt="" /> */}
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="section-title title-style-three mb-25">
                <h2>Upcoming <span>Event</span></h2>
              </div>
              <div className="inner-about-content">
                <h5>OPEN's 4th Anniversary</h5>
                <p>We are proud to announce that OPEN Community is celebrating its 4th anniversary on 1st February, 2023! Over the past four years, we have worked hard to create a close-knit community that fosters meaningful connections and provides opportunities for personal and professional growth. This anniversary marks a time for us to reflect on our journey, celebrate our achievements, and look forward to what the future holds for our community.</p>
                <p> We would like to extend a heartfelt gratitude to all our members, alumni, and mentors for helping us reach this milestone. Here’s to many more years of growth and success!</p>
                {/* <p>This celebration will be all about looking back at accomplishments of the community and replenishing the memories. This walk down the memory lane will help to embrace all the valuable connections made along the way. But the celebration won’t be all about reminiscing - It will also be an unforgettable eve,full of games & activities that will make this bond even more sturdy.</p> */}
                {/* <a href="/" className="btn btn-style-two">Know More</a> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="inner-about-shape"><img src="assets/img/images/medale_shape.png" alt="" /></div> */}
      </section>
  )
}

export default UpcomingEvent