import React from "react";

import projexpo1 from "../../../assets/img/events/projectexpo/projexpo1.png"

function SingleArea() {
  return (
    <section className="game-single-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="open-single-content">
              <div className="upcoming-open-head">
                <div className="uc-open-head-title text-center">
                  <span>01-04-2023</span>
                  <h4>Project Expo</h4>
                </div>
                <div className="uc-open-price text-center">
                  <h5>Offline Event</h5>
                </div>
              </div>
              <div className="game-single-img d-flex justify-content-center">
                <img
                  height="450px"
                  width="550px"
                   src={projexpo1}
                  //src="https://i.postimg.cc/pL2cJGBk/15106-C4-D-0225-40-F9-8-E7-E-C126630-D6-DAC.png"
                  className="wow fadeInRight"
                  data-wow-delay=".3s"
                  alt=""
                />
              </div>
              <p className="text-center">
                <br></br>
                <b>“It takes half your life before you discover life is a do-it-yourself project.”</b></p>
                <p className="text-center">
                Greetings to all Technophiles out there, OPEN Community is back with another spectacular event that will bedazzle your mind !!
                <br></br>
                OPEN Community is thrilled to bring you a Project Expo that is sure to 
                pique your interest. Every term, members of the community get together 
                to create a variety of outstanding projects. The event will be held on 5th April 2023 from 9 am to 5 pm.
                This expo will showcase all those projects that the members of the community
                have been working on till now.
                {" "}
                <br></br>
                <br></br>
                The expo is <b>open to all UPESites and interested students can also showcase their own projects in the expo.</b>It 
                is an excellent opportunity to gain interest and appreciation for your projects. You will get a chance to get recognized 
                and attract valuable interest towards your project. Its an incredible opportunity that will help you stand out from the crowd.
                
                Guests will get the incredible opportunity to hear about the origins of these projects, 
                their implementation, and the hurdles that the contributors experienced during the development process.
                Furthermore, visitors will be able to see personally how these initiatives are addressing real-world issues.
                It is a wonderful chance for a person to get inspired and start their own project.
               </p>
              <p className="text-center">
                Don't miss out on this incredible chance to experience the magic of innovative ideas.</p>
                <p className="text-center">For any further queries contact : opencommunity@ddn.upes.ac.in         
              </p>

<div class="container">
                <div class="row">
                  <div class="col">
                    <div className="open-single-title mt-60 mb-30">
                    <div className="text-center">
                    <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=zgSD_XlQy0uaVDJA7XQF2XMIfoOX-EhNlAWhlZ-cZ7tURFA5M0VKTkJSVlBHU1VDMVNYTERENk5WRy4u" className="btn btn-style-two">
                     Register
                    </a>
                    </div>
                    </div>
                    <div className="open-single-info mb-65">
                      <ul>
                        <li>
                        <span>Date :</span> April 12, 2023
                        </li>
                        <li>
                        <span>Time :</span> 9 am to 5 pm
                        </li>
                        <li>
                        <span>Venue :</span> Will be notified by mail
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleArea;
