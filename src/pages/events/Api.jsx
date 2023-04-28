import React from "react";
import api_img_1 from "../../assets/img/events/api_workshop/api_img_1.jpg";
import api_img_2 from "../../assets/img/events/api_workshop/api_img_2.jpg";
import api_img_3 from "../../assets/img/events/api_workshop/api_img_3.jpg";
import api_img_4 from "../../assets/img/events/api_workshop/api_img_4.jpg";
import api_img_5 from "../../assets/img/events/api_workshop/api_img_5.jpg";
import api_img_6 from "../../assets/img/events/api_workshop/api_img_6.jpg";
import api_img_7 from "../../assets/img/events/api_workshop/api_img_7.jpg";
import api_img_8 from "../../assets/img/events/api_workshop/api_img_8.jpg";


function SingleArea() {
  return (
    <section className="open-single-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="open-single-content">
              <div className="upcoming-open-head">
                <div className="uc-open-head-title">
                  <span>22-03-2023</span>
                  <h4>API Essentials</h4>
                </div>
                <div className="uc-open-price">
                  <h5>Offline Workshop</h5>
                </div>
              </div>
              <p>
              An API, i.e.,  Application Programming Interface, is a set of rules 
              and protocols that define how two software applications can 
              interact with each other. APIs allow for communication between 
              different systems, which enables them to share data and functionality.{" "}
              </p>
             
              <p>
              Take advantage of this chance to learn about APIs and how they can enhance 
              your education and future career prospects. 
              Discover the world of APIs to prepare for the future of the industry!
              </p>
              <div className="open-single-img">
                <div className="row">
                  <div className="col-sm-6">
                    <img src={api_img_7} alt="" />
                  </div>
                  <div className="col-sm-6">
                    <img src={api_img_8} alt="" />
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
                        <a href="https://www.linkedin.com/in/manan-gupta-0359a3205/"><span>Speaker :</span> Manan Gupta</a>
                        </li>
                        <li>
                          <span>Achievements :</span> <br />
                          Lead Student Developer @OPEN <br />
                         
                        </li>
                        {/* <li>
                          <span>LinkedIn :</span>{" "}
                          <a href="https://www.linkedin.com/in/manan-gupta-0359a3205/">
                            Click here
                          </a>
                        </li> */}
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
                          <a href="https://www.linkedin.com/in/ragharwal/"><span>Student Convener :</span> Mr. Raghav Agarwal</a>  
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/in/dr-gourav-bathla-b2155913/"><span>Faculty Convener :</span> Dr. Gourav Bathla</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="open-single-title mb-30">
                <h4>
                  Read <span>More ...</span>
                </h4>
              </div>
              <p>
              This event will cover what an API is, what their use cases are and how these 
              APIs can be accessed using Postman. This workshop will provide hands-on experience 
              on making basic APIs using python fastapi. Our expert speaker Manan Gupta will 
              answer all your queries and offer insightful information about this fascinating technology.
              </p>

                  <div className="open-single-title mt-30 mb-10">
                <h4>Glimpses</h4>
              </div>
              <div className="open-single-gallery">
                <div className="row">
                  <div className="col-lg-4 col-sm-6">
                    <img src={api_img_1} alt="" />
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <img src={api_img_2} alt="" />
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <img src={api_img_3} alt="" />
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <img src={api_img_4} alt="" />
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <img src={api_img_5} alt="" />
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <img src={api_img_6} alt="" />
                  </div>
                </div>
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
