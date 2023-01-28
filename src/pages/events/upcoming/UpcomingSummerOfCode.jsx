import React, { useEffect } from "react";
import WOW from "wowjs";
import osocImg from "../../../assets/img/events/osoc/osoc_img_1.jpg";

function UpcomingSummerOfCode() {
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
                src={osocImg}
                className="wow fadeInRight"
                data-wow-delay=".3s"
                alt=""
              />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="section-title title-style-three mb-25">
              <h2>
                Upcoming <span>Event</span>
              </h2>
            </div>
            <div className="inner-about-content">
              <h5>Open Summer Of Code</h5>
              <p>
                <span>OPEN Summer Of Code</span>is a 30-day open-source
                initiative that runs from June through July, 2022. At OSC,
                students would gain knowledge and advance by engaging in the
                open source community. Participants will assist to some
                excellent real-world projects through OPEN on GitHub from the
                leisure of their own homes, guided by mentors and competent
                experts.
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

export default UpcomingSummerOfCode;
