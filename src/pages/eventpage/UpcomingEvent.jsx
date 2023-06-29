import React,{ useEffect } from 'react'
import WOW from "wowjs";

import event from '../../assets/img/rpa3.jpg';

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

                {/* <img width="600px" height="450px" src={event} className="wow fadeInRight" data-wow-delay=".3s" alt="" /> */}
                {/* <img src="https://i.postimg.cc/PqKjMvZv/2-BDF9713-7-E73-45-DC-8-DFC-301-F39382506-1.png" className="wow fadeInLeft" data-wow-delay=".6s" alt="" /> */}
                {/* <img src="https://i.postimg.cc/gJR1TwLK/38-EA0514-335-A-4-A37-9405-6880-F0-A95-E26-1.png" className="wow fadeInUp" data-wow-delay=".6s" alt="" /> */}

              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              {/* <div className="section-title title-style-three mb-25">
                <h2>Upcoming <span>Event</span></h2>
              </div> */}
              <div className="inner-about-content">

                <h5>Open Summer of Code 2023</h5>
                <p>Embrace the Open Source Adventure! Gear up for an exhilarating journey with OSoC (Open Source Opportunity for Enthusiasts), a thrilling month-long program that propels open source enthusiasts into the heart of real-world challenges. From July 7th to August 7th, unleash your passion and join a dynamic community without any participation restrictions. Dive into the electrifying atmosphere of our Discord hub, where brilliant minds converge to share ideas, seek guidance, and forge collaborations. Take charge of your destiny by handpicking an intriguing issue from our project list, claiming it as your own on the GitHub repository. As you boldly tackle the challenge, you'll unleash your potential and leave a lasting impact on the open source world. Join OSoC now, and let the adventure begin!
                </p>
                 <a href="/Osoc23" className="btn btn-style-two">Know More</a> 

                {/* <h5>RPA 3.0</h5>
                <p>Buckle up everyone as OPEN is back again with another spectacular event, RPA 3.0. This event is an extension to our previous event “Uncovering RPA”, which set the foundation for discovering the prospects of RPA in these modern times. The speaker for the event is Mukesh Kala, who is a UiPath MVP, RPA Developer.  He will guide you towards learning the prospects of RPA and how it is so crucial in the current era. Learning about the technology that mimics the actions of a human worker and automates them will be more beneficial than you can ever imagine.</p>
         */}
                {/* <p>This celebration will be all about looking back at accomplishments of the community and replenishing the memories. This walk down the memory lane will help to embrace all the valuable connections made along the way. But the celebration won’t be all about reminiscing - It will also be an unforgettable eve,full of games & activities that will make this bond even more sturdy.</p> */}
                 {/* <a href="/projectexpo" className="btn btn-style-two">Know More</a>  */}

              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default UpcomingEvent