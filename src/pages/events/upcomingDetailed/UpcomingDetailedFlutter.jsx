import React from "react";

import flutterImg from "../../../../assets/img/events/flutter/flutter_img_5.jpg";

function SingleArea() {
  return (
    <section className="game-single-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="game-single-content">
              <div className="upcoming-game-head text-center">
                <div className="uc-game-head-title">
                  <span>01-02-2023</span>
                  <h4>OPEN'S 4th Anniversary</h4>
                </div>
                <div className="uc-game-price">
                  <h5>Welcome to OPEN!</h5>
                </div>
              </div>
              <div className="game-single-img d-flex justify-content-center">
                <img
                  height="450px"
                  src={flutterImg}
                  // src="https://i.postimg.cc/pL2cJGBk/15106-C4-D-0225-40-F9-8-E7-E-C126630-D6-DAC.png"
                  className="wow fadeInRight"
                  data-wow-delay=".3s"
                  alt=""
                />
              </div>
              <p className="mt-20 text-center">
                <span>Flutter</span> is a two-day long workshop with the aim of
                equipping all with the necessary tools to create hybrid apps. It
                not only helps in refining one's technical skills but also helps
                to harness all the basic dialogues that need to be checked to
                learn to do hands-on projects.Also, it might just be the
                kickstart you needed to begin your mobile application
                development journey.{" "}
              </p>
              <p className="text-center">
                This workshop aims to furnish you with all the skills you need
                to push all your boundaries and exceed your own expectations. It
                will help to learn everything from scratch and also provide
                hands-on experience on each and every aspect. We surround
                ourselves with mobile apps all day and night long, making them
                can be as much fun as using them. This workshop brings forward
                this aim of working out a way to make mobile application
                development a fun experience and a learning endeavor.
              </p>

              <div class="container">
                <div class="row">
                  <div class="col">
                    <div className="game-single-title mt-60 mb-30">
                      <h4>Section 1</h4>
                    </div>
                    <div className="game-single-info mb-65">
                      <ul>
                        <li>
                          <span>Regiter :</span> registeration link here
                        </li>
                        <li>
                          <span>Whatsapp :</span> whatsapp link here
                        </li>
                        <li>
                          <span>Contact :</span>{" "}
                          <a href="https://www.linkedin.com/in/akash-panwar-27b0141bb/">
                            sample@gmail.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col">
                    <div className="game-single-title mt-60 mb-30">
                      <h4>Venue details</h4>
                    </div>
                    <div className="game-single-info mb-65">
                      <ul>
                        <li>
                          <span>Venue :</span> UPES
                        </li>
                        <li>
                          <span>Number of attendees :</span> 187
                        </li>
                        <li>
                          <span>XYZ :</span> 187
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <a href="/#" className="btn btn-style-two">
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleArea;
