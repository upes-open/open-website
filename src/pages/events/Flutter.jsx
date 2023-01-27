import React from "react";

import rpa_img_1 from "../../assets/img/events/rpa/rpa_img_1.jpg";
import rpa_img_2 from "../../assets/img/events/rpa/rpa_img_2.jpg";
import rpa_img_3 from "../../assets/img/events/rpa/rpa_img_3.jpg";
import rpa_img_4 from "../../assets/img/events/rpa/rpa_img_4.jpg";
import rpa_img_5 from "../../assets/img/events/rpa/rpa_img_5.jpg";
import rpa_img_6 from "../../assets/img/events/rpa/rpa_img_6.jpg";
import rpa_img_7 from "../../assets/img/events/rpa/rpa_img_7.jpg";
import rpa_img_9 from "../../assets/img/events/rpa/rpa_img_9.jpg";

function SingleArea() {
  return (
    <section className="game-single-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="game-single-content">
              <div className="upcoming-game-head">
                <div className="uc-game-head-title">
                  <span>25-08-2022</span>
                  <h4>Flutter</h4>
                </div>
                <div className="uc-game-price">
                  <h5>Offline Workshop</h5>
                </div>
              </div>
              <p>
                <span>Flutter</span> is a two-day long workshop with the aim of
                equipping all with the necessary tools to create hybrid apps. It
                not only helps in refining one's technical skills but also helps
                to harness all the basic dialogues that need to be checked to
                learn to do hands-on projects.{" "}
              </p>
              <p>
                Also, it might just be the kickstart you needed to begin your
                mobile application development journey. This workshop aims to
                furnish you with all the skills you need to push all your
                boundaries and exceed your own expectations. It will help to
                learn everything from scratch and also provide hands-on
                experience on each and every aspect. We surround ourselves with
                mobile apps all day and night long, making them can be as much
                fun as using them. This workshop brings forward this aim of
                working out a way to make mobile application development a fun
                experience and a learning endeavor.
              </p>
              <div className="game-single-img">
                <div className="row">
                  <div className="col-sm-6">
                    <img src={rpa_img_7} alt="" />
                  </div>
                  <div className="col-sm-6">
                    <img src={rpa_img_9} alt="" />
                  </div>
                </div>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col">
                    <div className="game-single-title mt-60 mb-30">
                      <h4>Speaker details</h4>
                    </div>
                    <div className="game-single-info mb-65">
                      <ul>
                        <li>
                          <span>Speaker :</span> Akash Panwar
                        </li>
                        <li>
                          <span>Achievements :</span> Lorem, ipsum dolor sit
                          amet consectetur adipisicing elit. Ducimus amet
                          expedita dolorum explicabo.
                        </li>
                        <li>
                          <span>LinkedIn :</span>{" "}
                          <a href="https://www.linkedin.com/in/akash-panwar-27b0141bb/">
                            Click here
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="game-single-title mb-30">
                <h4>
                  Read <span>More ...</span>
                </h4>
              </div>
              <p>
                Flutter workshop proved to be a sensational success. It was a
                two-day long workshop aimed to inculcate cross platform app
                development among students with high competence and enthusiasm.
                The student convenor, speaker and facilitators poured all their
                time and energy to make this event unforgettable. The
                participants got a wonderful opportunity to learn about the
                flutter framework by working on 2 projects on flutter. The
                projects were chosen in a way that can ensure valuable learning
                of the learners. A final quiz was also conducted with the aim to
                refresh the concepts taught and test the knowledge grasped by
                the learners. The efficiency of the projects and quiz points
                were seen as the basis for final prize distribution giving
                everybody a fair chance to stand out. This offline workshop
                registered over 400 candidates with 170 making it till the end.
                The learners worked on projects like Tic tac toe game and
                Netflix clone UI, both of the immensely popular prospects. This
                event left an impression and eagerness among the participants to
                learn and upgrade their skills and contribute to projects. Their
                feedback bestowed positivity and approval. This efficient
                conduction of the event could not have been possible without the
                guidance and support of the entire organizing committee. This
                workshop was truly concealed with a success symbol.
              </p>
              <div className="game-single-title mt-30 mb-10">
                <h4>Glimpses</h4>
              </div>
              <div className="game-single-gallery">
                <div className="row">
                  <div className="col-lg-4 col-sm-6">
                    <img src={rpa_img_1} alt="" />
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <img src={rpa_img_2} alt="" />
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <img src={rpa_img_3} alt="" />
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <img src={rpa_img_4} alt="" />
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <img src={rpa_img_5} alt="" />
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <img src={rpa_img_6} alt="" />
                  </div>
                </div>
              </div>
              <div className="game-single-shape">
                <img src="assets/img/images/game_section_shape.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleArea;
