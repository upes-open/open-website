import React, { useEffect } from "react";
import WOW from "wowjs";
import rpaImg from "../../../assets/img/events/rpa/rpa_img_9.jpg";

function UpcomingRpa() {
  useEffect(() => {
    new WOW.WOW({
      boxClass: "wow",
      animateClass: "animated",
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
                width="600px"
                height="450px"
                src={rpaImg}
                className="wow fadeInRight"
                data-wow-delay=".3s"
                alt=""
              />
              {/* <img src="https://i.postimg.cc/PqKjMvZv/2-BDF9713-7-E73-45-DC-8-DFC-301-F39382506-1.png" className="wow fadeInLeft" data-wow-delay=".6s" alt="" /> */}
              {/* <img src="https://i.postimg.cc/gJR1TwLK/38-EA0514-335-A-4-A37-9405-6880-F0-A95-E26-1.png" className="wow fadeInUp" data-wow-delay=".6s" alt="" /> */}
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="section-title title-style-three mb-25">
              <h2>
                Upcoming <span>Event</span>
              </h2>
            </div>
            <div className="inner-about-content">
              <h5>Uncovering RPA and UiPath</h5>
              <p>
                <span>Uncovering RPA and UiPath</span> is a one-day workshop
                with the ambition of introducing one of the trendiest
                technologies in the tech gala. Robotic Process Automation is a
                technology that helps in furnishing the businesses with “bots”
                or software robots that pluck out the mundane tasks from the
                system and mimic the actions of a human worker to finish them.
              </p>
              <a href="/#" className="btn btn-style-two">
                Know More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="inner-about-shape"><img src="assets/img/images/medale_shape.png" alt="" /></div> */}
    </section>
  );
}

export default UpcomingRpa;
