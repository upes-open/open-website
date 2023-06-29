import React from "react";

import anni_img_1 from "../../assets/img/events/anniversary/anni_img_1.jpg";
import anni_img_2 from "../../assets/img/events/anniversary/anni_img_2.jpg";
import anni_img_3 from "../../assets/img/events/anniversary/anni_img_3.jpg";
import anni_img_4 from "../../assets/img/events/anniversary/anni_img_4.jpg";
import anni_img_5 from "../../assets/img/events/anniversary/anni_img_5.jpg";
import anni_img_6 from "../../assets/img/events/anniversary/anni_img_6.jpg";
import anni_img_7 from "../../assets/img/events/anniversary/anni_img_7.jpg";
import anni_img_8 from "../../assets/img/events/anniversary/anni_img_8.jpg";

function SingleArea() {
  return (
    <section className="open-single-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="open-single-content">
              <div className="upcoming-open-head">
                <div className="uc-open-head-title">
                  <span>01-02-2023</span>
                  <h4>OPEN's 4th Anniversary</h4>
                </div>
                <div className="uc-open-price">
                  <h5>Offline Event</h5>
                </div>
              </div>
              <p>
              The 4th anniversary celebration of the OPEN Community at UPES was a resounding success, bringing together community members, alumni, and the Dean of the School of Computer Science to reflect on the past four years and look forward to the future. The event was held on 1st February 2023 at room number 11014 from 3 PM to 5 PM and was attended by a large number of community members, both in person and online. The event began with a welcome address from the community leaders, who thanked everyone for their contributions to the community and highlighted the key achievements and milestones over the past four years.
              The celebration was a perfect opportunity for community members to connect and share their experiences with one another. The alumni shared their valuable insights and wisdom with the current members, offering guidance and support to help them achieve their goals. The Dean of the School of Computer Science also graced the occasion with their presence, speaking about the importance of community building and how it can positively impact personal and professional growth. They also shared their thoughts on the community's achievements and congratulated the members on their hard work and dedication.


             {" "}
              </p>
              <div className="open-single-img">
                <div className="row">
                  <div className="col-sm-6">
                    <img src={anni_img_8} alt="" />
                  </div>
                  <div className="col-sm-6">
                    <img src={anni_img_7} alt="" />
                  </div>
                </div>
              </div>
             

              <div className="open-single-title mb-30">
                <h4>
                  Read <span>More ...</span>
                </h4>
              </div>
              <p>
              The event was not just about reflecting on the past, but also about having fun and building connections. There were games and activities designed to bring everyone together, creating lasting memories and strengthening the bonds of the community. As the event ended, the community leaders thanked everyone for their presence and contributions to the community. They highlighted the importance of community building and how it can positively impact personal and professional growth.
            The success of the 4th anniversary celebration of the OPEN Community at UPES was a testament to the hard work and dedication of the members and the importance of community building. It was a perfect opportunity to reflect on the past, build connections, and look forward to the future with renewed enthusiasm and motivation.


              </p>
              <p>
              Overall, the event was a great success, and it was a pleasure to see so many community members and alumni come together to celebrate and reflect on the past four years. The event was a reminder of the strength and importance of the OPEN Community and its ability to positively impact the lives of its members.
              </p>
              <div className="open-single-title mt-30 mb-10">
                <h4>Glimpses</h4>
              </div>
              <div className="open-single-gallery">
                <div className="row">
                  <div className="col-lg-4 col-sm-6">
                    <img src={anni_img_1} alt="" />
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <img src={anni_img_2} alt="" />
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <img src={anni_img_3} alt="" />
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <img src={anni_img_4} alt="" />
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <img src={anni_img_5} alt="" />
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <img src={anni_img_6} alt="" />
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
