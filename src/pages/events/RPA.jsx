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
                  <span>23-01-2023</span>
                  <h4>
                    Uncovering <span>RPA</span> and <span>UiPath!</span>
                  </h4>
                </div>
                <div className="uc-game-price">
                  <h5>Offline Workshop</h5>
                </div>
              </div>
              <p>
                <span>Uncovering RPA and UiPath</span> is a one-day workshop
                with the ambition of introducing one of the trendiest
                technologies in the tech gala. Robotic Process Automation is a
                technology that helps in furnishing the businesses with “bots”
                or software robots that pluck out the mundane tasks from the
                system and mimic the actions of a human worker to finish them.{" "}
              </p>
              <p>
                This is a rapidly evolving field which carries vast potential in
                transforming the way we work by improving efficiency. This event
                will start from the basic introduction of RPA, including details
                of its functioning, its benefits and applications. Learning
                about the various fields where RPA functions as a blooming
                industry will help one understand the importance automation
                carries in the future. Being equipped with the knowledge about
                the automation world will help in being industry ready. This
                workshop strives to go forward with the vision of making
                everybody automation ready.
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
                Uncovering RPA and UiPath stuck out as an evolutionary success.
                This one-day long workshop aimed to make everyone automation
                ready, inculcating this ideology among like minded students.
                This workshop taught how RPA as a tool is changing the modern
                world, how its application is making our lives easier. It also
                focused on the importance it carries in the career world and how
                being knowledgeable about it can boost one’s resume. This
                workshop also helped in understanding the difference between a
                RPA bot and a Robot. Installation of UiPath Studio was also done
                followed by making RPA bots and a question/ answer session. This
                event welcomed over 134 registrations with 32 students actually
                attending the workshop. A quiz was also conducted to check the
                understanding level of the participants. The attendees were also
                taught to create a simple project that fetches data from a web
                page and stores it in Excel sheets. This event would not have
                been possible without the student convenor, the facilitators and
                the speaker who channeled all their energy in making this
                workshop unique and knowledgeable. The students who participated
                in this workshop all showed their utmost dedication and
                sincerity. This workshop surely made everyone curious about the
                vastness automation carries.
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
