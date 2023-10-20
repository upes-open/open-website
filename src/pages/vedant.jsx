import React, { useEffect } from 'react';
import WOW from 'wowjs';

import image from '../assets/img/VedantBarclays.png';
import logo from '../assets/img/barclays.png'

function Barclays() {
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
          <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
            <div className="inner-about-img">
              <img
                width="480px"
                height="550px"
                src={image}
                className="wow fadeInRight"
                data-wow-delay=".3s"
                
                alt=""
              />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="section-title title-style-three black-title text-center mb-70">
              <h2>
                Congratulations<span> Vedant Saraf</span>
              </h2>
            </div>
            <div className="inner-about-content">
              {/* <h5>              </h5> */}
              <p>
              OPEN Community would like to congratulate its <b>Vice President</b> Vedant Saraf on successfully getting placed 
              at <b>Barclays</b>. We are proud of you sir!
              </p>
              <img
                width="380px"
                height="230px"
                src={logo}
                className="wow fadeInRight"
                data-wow-delay=".3s"
                alt=""
                align="center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Barclays;
