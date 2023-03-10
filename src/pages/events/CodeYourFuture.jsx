import React from "react";

import codeyourfut_img_1 from "../../assets/img/events/CodeYourFuture/codeyourfut_img_1.JPG";
import codeyourfut_img_2 from "../../assets/img/events/CodeYourFuture/codeyourfut_img_2.JPG";
import codeyourfut_img_3 from "../../assets/img/events/CodeYourFuture/codeyourfut_img_3.JPG";
import codeyourfut_img_4 from "../../assets/img/events/CodeYourFuture/codeyourfut_img_4.JPG";
import codeyourfut_img_5 from "../../assets/img/events/CodeYourFuture/codeyourfut_img_5.JPG";



function SingleArea() {
  return (
    <section className="open-single-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="open-single-content">
              <div className="upcoming-open-head">
                <div className="uc-open-head-title">
                  <span>23-02-2023</span>
                  <h4>Code Your Future</h4>
                </div>
                <div className="uc-open-price">
                  <h5>Offline Workshop</h5>
                </div>
              </div>
              <p>
                <span>Code Your Future</span> February, 2023, we conducted an exclusive interactive
                 session for the community members titled "CODE YOUR FUTURE" with the community’s
                 president, Mr. Raghav Agarwal. The session was aimed at helping the members gear 
                 up for the approaching internship and placement season by sharing valuable insights
                 on how to excel in placements, DSA, and projects.{" "}
              </p>
              <p>
               The interactive session proved to be an unparalleled opportunity for the members
               to learn, grow and excel in the journey towards building their careers. The event 
               was a fantastic learning experience for the members and a testament to the thriving
               community of tech enthusiasts at OPEN.

              </p>
              <div className="open-single-img">
                <div className="row">
                  <div className="col-sm-6">
                    <img src={codeyourfut_img_2} className="h-100" alt="" />
                  </div>
                  <div className="col-sm-6">
                    <img src={codeyourfut_img_4} className="h-100" alt="" />
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
                          <span>Speaker :</span>  Mr. Raghav Agarwal
                        </li>
                        <li>
                        <span>Achievements :</span> 
                          BA3 Intern @Barclays, 
                          President @OPEN 
                        </li>
                        <li>
                          <span>LinkedIn :</span>{" "}
                          <a href="https://www.linkedin.com/in/ragharwal/">
                            Click here
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col">
                    <div className="open-single-title mt-60 mb-30">
                      <h4>Event details</h4>
                    </div>
                    <div className="open-single-info mb-65">
                    <ul>
                        <li>
                          <span>Participants :</span> 167
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/in/ragharwal/"><span>Student Convener :</span> Mr. Raghav Agarwal</a>  
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/in/dr-gourav-bathla-b2155913/"><span>Faculty Convener :</span> Dr. Gourav Bathla</a>
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
                On 23rd February, 2023, we conducted an exclusive interactive session for the
                community members titled "CODE YOUR FUTURE" with the community’s president, 
                Mr. Raghav Agarwal. The session was aimed at helping the members gear up for
                the approaching internship and placement season by sharing valuable insights
                on how to excel in placements, DSA, and projects. The event was exclusively 
                for OPEN members and proved to be a huge success with the attendees expressing 
                their appreciation for the opportunity to learn from one of OPEN's most insightful
                seniors. Seats for the event were limited and allocated on a first-come, first-served
                basis, making it a highly sought-after opportunity among the community members.
                Overall, "CODE YOUR FUTURE" was a remarkable session that aimed to empower and 
                equip the community members with the necessary skills and knowledge to achieve 
                success in their careers. The event serves as a testament to the commitment of
                OPEN towards nurturing and supporting the growth of tech enthusiasts in the community.
              </p>
              <div className="open-single-title mt-30 mb-10">
                <h4>Glimpses</h4>
              </div>
              <div className="open-single-gallery">
                <div className="row">
                  <div className="col-lg-4 col-sm-6 mb-30">
                    <img src={codeyourfut_img_1} className="h-70" alt="" />
                  </div>
                  <div className="col-lg-4 col-sm-6 mb-30">
                    <img src={codeyourfut_img_3} className="h-70" alt="" />
                  </div>
                  <div className="col-lg-4 col-sm-6 mb-30">
                    <img src={codeyourfut_img_5} className="h-70" alt="" />
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
