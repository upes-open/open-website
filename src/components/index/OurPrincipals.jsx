import React from 'react'
import guy from '../../assets/img/9.png';

function OurPrincipals() {
  return (
	 <section className="just-openrs-area just-openrs-bg pt-115 pb-120">
            <div className="container">
              <div className="row">
                <div className="col-xl-5 col-lg-6 col-md-10">
                  <div className="section-title title-style-three white-title mb-70">
                    <h2>Our Key <span>Principals</span></h2>
                    <p>At OPEN, We belive in three key principals</p>
                  </div>
                  <div className="just-openrs-list">
                    <ul>
                      <li>
                        <div className="just-openrs-list-icon">
                          <img src="assets/img/icon/openr_list_icon01.png" alt="" />
                        </div>
                        <div className="just-openrs-list-content fix">
                          <h5>Aware</h5>
                          <p>We aim at spreading awareness about the advantage of using Open Source softwares over conventional proprietary softwares.</p>
                        </div>
                      </li>
                      <li>
                        <div className="just-openrs-list-icon">
                          <img src="assets/img/icon/openr_list_icon02.png" alt="" />
                        </div>
                        <div className="just-openrs-list-content fix">
                          <h5>Adopt</h5>
                          <p>Spreading awareness is futile until and unless we motivate people to adopt the prevailing Open Source softwares in their work environment.</p>
                        </div>
                      </li>
                      <li>
                        <div className="just-openrs-list-icon">
                          <img src="assets/img/icon/openr_list_icon03.png" alt="" />
                        </div>
                        <div className="just-openrs-list-content fix">
                          <h5>Contribute</h5>
                          <p>The whole concept of Open Source revolves around community which uses it and contributing to the community is always a matter of prestige.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-6 d-none d-lg-block">
                  <div className="just-openrs-img">
                    <img src={guy} alt="" className="just-openrs-character" />
                    <div className="just-openrs-circle-shape">
                      {/* <img src="assets/img/images/openrs_circle_line.png" alt="" /> */}
                      {/* <img src="assets/img/images/openrs_circle_shape.png" alt="" className="rotateme" /> */}
                    </div>
                    {/* <img src="assets/img/images/just_openrs_chart.png" alt="" className="openrs-chart-shape" /> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}

export default OurPrincipals