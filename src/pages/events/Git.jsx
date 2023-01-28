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
                  <span>18-01-2023</span>
                  <h4>GIT Workshop</h4>
                </div>
                <div className="uc-game-price">
                  <h5>Offline Workshop</h5>
                </div>
              </div>
              <p>
                <span>GIT</span> s an open source distributed version control
                system that helps developers track changes in their code. In
                this workshop, participants will learn how to install and use
                GIT, how to create repositories, manage branches, and
                collaborate on projects using GIT. They will also learn how to
                use the command line interface and other advanced features. This
                workshop is ideal for beginning developers who want to learn
                about version control systems but also for experienced
                developers who want to become more proficient in using GIT.{" "}
              </p>
              <p>
                By attending this workshop, participants will walk away with a
                better understanding of GIT and its use in software development
                processes. They will be able to confidently use GIT in their own
                project or team environments to facilitate collaboration,
                version control, and open source development.
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
                The workshop on the introduction of GIT was a whooping triumph!
                Our expert speaker, Ashutosh Kapoor did a fantabulous job
                delivering the required knowledge in a beginner oriented manner.
                This event mainly focused on the 1st and the 2nd year students
                who are a part of the newly introduced open learning as well the
                collaboration team. The organizing team's efficient management
                contributed to the smooth sailing of the workshop. The attendees
                received a thorough understanding of the fundamentals of GIT,
                along with the technical skills required to use it effectively.
                The workshop began with an overview of the basics of version
                control and distributed version control systems. We looked at
                how to create and manage a repository, how to add files and make
                commits, how to collaborate with other users, and how to use
                issues and pull requests.
              </p>
              <p>
                We also looked at different branching strategies and discussed
                when each strategy is most appropriate. Through hands-on
                exercises, participants learned how to use git commands like
                clone, commit, push, pull and checkout to successfully manage
                their repositories. Throughout the workshop, attendees had
                plenty of opportunities to discuss their projects and ask
                questions related to their own implementations. They also
                learned about various tools available for building automated
                testing pipelines with GIT and how to integrate GIT into
                continuous deployment processes. The workshop was exceedingly
                successful in its goal to help developers become proficient in
                GIT. We concluded our workshop by exploring some of the more
                advanced features of GitHub. At the end of the workshop, most
                participants were able to confidently work with GIT on their own
                projects and were very enthusiastic about the possibilities of
                using GIT for their future projects!
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
