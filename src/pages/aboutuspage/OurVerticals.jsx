import React from 'react';
import Counter from './Counter';

function OurVerticals() {
  return (
	  <section className="features-area features-bg pt-120 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title title-style-two text-center mb-60">
                <span>We work in two verticals</span>
                <h2>Our <span>Verticals</span></h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-6 col-md-6">
              <div className="features-item mb-30">
                <div className="features-head mb-35">
                  <div className="product-tag"><a href="/#">Collaboration</a></div>
                  <h4>Brain of our community</h4>
                  <p>Under the Collaboration vertical, we have student developers from the School of Computer Science who contribute to real-world projects. This vertical gives you the opportunity to acquire various skills in version control systems and open-source development and contribute to a large number of projects involving technologies like web, mobile development, blockchain, cloud computing, artificial intelligence and more.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-6">
              <div className="features-item mb-30">
                <div className="features-head mb-35">
                  <div className="product-tag"><a href="/#">Engagment</a></div>
                  <h4>Heart of our community</h4>
                  <p>Under the engagement vertical, we organise various workshops, seminars, competitions, hands-on sessions, and fun activities to increase the participation of students in open source and spark interest among open source enthusiasts. This vertical consists of various teams, including Design, Editorial, Social Media and PR. Students from all schools can contribute to this vertical based on their skill set and area of interest.</p>
                </div>
              </div>
            </div>
          </div>
          <Counter/>
        </div>
      </section>
  )
}
export default OurVerticals;
