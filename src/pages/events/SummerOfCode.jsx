import React from "react";

import osoc_img_1 from "../../assets/img/events/osoc/osoc_img_1.jpg";
import osoc_img_2 from "../../assets/img/events/osoc/osoc_img_2.jpg";
import osoc_img_3 from "../../assets/img/events/osoc/osoc_img_3.jpg";
import osoc_img_4 from "../../assets/img/events/osoc/osoc_img_4.jpg";
import osoc_img_5 from "../../assets/img/events/osoc/osoc_img_5.jpg";
import osoc_img_6 from "../../assets/img/events/osoc/osoc_img_6.jpg";

function SingleArea() {
  return (
    <section className="open-single-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="open-single-content">
              <div className="upcoming-open-head">
                <div className="uc-open-head-title">
                  <span>15-06-2022</span>
                  <h4>OPEN Summer Of Code</h4>
                </div>
                <div className="uc-open-price">
                  <h5>Offline Workshop</h5>
                </div>
              </div>
              <p>
                <span>OPEN Summer Of Code</span>is a 30-day open-source
                initiative that runs from June through July, 2022. At OSC,
                students would gain knowledge and advance by engaging in the
                open source community. Participants will assist to some
                excellent real-world projects through OPEN on GitHub from the
                leisure of their own homes, guided by mentors and competent
                experts.{" "}
              </p>
              <p>
                The projects would be structured in such a manner that all types
                of contributors, from newbie teething troubles and documentation
                to experts and advanced problems, will be able to contribute.
                Furthermore, we would offer many mind-calming technical
                activities each weekend.
              </p>
              <div className="open-single-img">
                <div className="row">
                  <div className="col-sm-6">
                    <img src={osoc_img_1} className="h-100" alt="" />
                  </div>
                  <div className="col-sm-6">
                    <img src={osoc_img_2} className="h-100" alt="" />
                  </div>
                </div>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col">
                    <div className="open-single-title mt-60 mb-30">
                      <h4>Speaker details</h4>
                    </div>
                    <div className="open-single-info mb-65">
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
                    <div className="open-single-title mt-60 mb-30">
                      <h4>Venue details</h4>
                    </div>
                    <div className="open-single-info mb-65">
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

              <div className="open-single-title mb-30">
                <h4>
                  Read <span>More ...</span>
                </h4>
              </div>
              <p>
                The Open Summer of Code (OSOC) received an exceptional response
                from the get go and bagged 100+ registrations in less than a
                week! OSOC was a two month online event that ran during the
                summer months and provided students with an opportunity to learn
                and develop open source software. OSOC was designed to provide a
                platform for developers, designers, and enthusiasts to work
                together on projects related to open source technology and
                culture. The event was led by experienced coders who were able
                to elaborate the principles of coding and help participants
                troubleshoot issues they encountered. All the 25 organizing team
                members did a marvelous job guiding the contributors with
                passion and dedication. Projects span a range of topics
                including web development, software engineering, mobile
                application development, open development, data science, machine
                learning, artificial intelligence, open source infrastructure,
                security, and more.
              </p>
              <p>
                The projects undertaken were quite varied and challenging,
                participants collaborated using various online tools such as
                GitHub, Slack and Google Hangouts. They experienced working on
                any real-world projects including developing new software,
                designing new user interfaces, advocating for open source,
                building a knowledge base or creating data visualizations.
                During the tenure from 15th June, 2022 to 15th July, 2022 the
                participants completed a total of 8 projects. Along with 7
                refreshing weekend end fun events ranging from scribble, tech
                quiz , riddle tales , movie trivia night (Open Mic), tech
                hubbub, guess the movie, to guess the song. The event was filled
                with laughter, fun, and great conversations. People were able to
                connect with each other, make new friends, and talk about their
                interests. The opens were especially popular and provided a
                great opportunity for people to bond with each other. At the end
                of the weekend, everyone was feeling energized and inspired. It
                was a great way to spend a weekend, and it was definitely an
                event that people will remember for a long time.
              </p>
              <div className="open-single-title mt-30 mb-10">
                <h4>Glimpses</h4>
              </div>
              <div className="open-single-gallery">
                <div className="row">
                  <div className="col-lg-4 col-sm-6 mb-30">
                    <img src={osoc_img_1} className="h-100" alt="" />
                  </div>
                  <div className="col-lg-4 col-sm-6 mb-30">
                    <img src={osoc_img_2} className="h-100" alt="" />
                  </div>
                  <div className="col-lg-4 col-sm-6 mb-30">
                    <img src={osoc_img_3} className="h-100" alt="" />
                  </div>
                  <div className="col-lg-4 col-sm-6 mb-30">
                    <img src={osoc_img_4} className="h-100" alt="" />
                  </div>
                  <div className="col-lg-4 col-sm-6 mb-30">
                    <img src={osoc_img_5} className="h-100" alt="" />
                  </div>
                  <div className="col-lg-4 col-sm-6 mb-30">
                    <img src={osoc_img_6} className="h-100" alt="" />
                  </div>
                </div>
              </div>
              <div className="open-single-shape">
                <img src="assets/img/images/open_section_shape.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleArea;
