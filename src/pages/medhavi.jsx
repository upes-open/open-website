import React, { useEffect } from 'react';
import WOW from 'wowjs';

import image from '../assets/img/medhavi.png';
import logo from '../assets/img//Cradlepoint_logo.png'

function Outreachy() {
  useEffect(() => {
    new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: false,
      live: true,
      loop: Infinity,
    }).init();
  }, []);

  return (
    <section className="inner-about-area fix">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-6 order-0 order-lg-2">
            <div className="inner-about">
            <div className="section-title title-style-three black-title text-center mb-70 ">
              <h2>
                Congratulations<span> Medhavi Singh</span>
              </h2>
            </div>
            <div className="inner-about-content">
              <p>
              OPEN Community would like to congratulate its <b>President</b> Medhavi Singh on successfully getting placed 
              at <b>Cradlepoint</b>. We are proud of you ma'am!
              </p>
              <img 
                width="400px"
                height="150px"
                src={logo}
                className="wow fadeInRight"
                data-wow-delay=".3s"
                alt=""
              />
            </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
              <img
                width="380px"
                height="550px"
                src={image}
                className="wow fadeInRight"
                data-wow-delay=".3s"
                
                alt=""
              />
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
}

export default Outreachy;
