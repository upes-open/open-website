import React, { useEffect } from "react";
import WOW from "wowjs";

function UpcomingEvent() {
  useEffect(() => {
    new WOW.WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: false,
      live: true,
    }).init();
  }, []);

  return (
    <section className="inner-about-area fix">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
            <div className="inner-about-img">
              {/* Ensure the correct path based on your project setup */}
              <img
                width="510px"
                height="530px"
                src="/flutter2025.png" // Change if using src/assets
                className="wow fadeInRight"
                data-wow-delay=".3s"
                alt="Flutter Workshop"
                style={{ maxWidth: "100%", height: "460px" }}
              />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="section-title title-style-three black-title text-center mb-70"></div>
            <div className="inner-about-content">
              <a href="/osoc23">Right on Dart: The Flutter Workshop</a>
              <p>
                "Great apps aren’t just built—they’re crafted, line by line, with curiosity and a bit of magic."
                <br />🚀 Join us for an exciting workshop!
                <br />Dates: 24th & 25th March
              </p>
              <br />
              <a
                href="https://forms.gle/Zf1hgfkK2uPaN8re9"
                className="btn btn-style-two"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Now!
              </a>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpcomingEvent;
