import React,{ useEffect } from 'react';
import 'magnific-popup';
import $ from 'jquery';
import {Link} from 'react-router-dom';

function AboutUsArea() {
  return (
	  <section className="about-us-area pt-90 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 order-0 order-lg-2">
              </div>
              <div className="col-lg-6">
                <div className="section-title title-style-two mb-45">
                  {/* <span>about story</span> */}
                  <h2> <span>OPEN Community</span> </h2>
                </div>
                <div className="about-content">
                  <p>At OPEN we aim to spread awareness about the advantages of open softwares.</p>
                  <p>Our dynamic team works on the premise of providing the right support and mentorship to students working on open source projects, thus leading towards various advancements and innovation in this line of work. Our community provides a holistic environment to explore, ideate and originate various solutions to real-world problems, thus contributing towards the welfare and advancement of our society while enhancing our communication, leadership, teamwork and soft skills.</p>
                  {/* <div className="about-btn">
                    <a href="/#" className="btn">READ MORE</a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default AboutUsArea;
