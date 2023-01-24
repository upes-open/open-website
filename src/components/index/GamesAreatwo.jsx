import React from 'react'
function GamesAreatwo() {

  
  return (
	 <section className="just-gamers-area just-gamers-bg pt-115 pb-120">
            <div className="container">
              <div className="row">
                <div className="col-xl-5 col-lg-6 col-md-10">
                  <div className="section-title title-style-three white-title mb-70">
                    <h2>Our Key <span>Principals</span></h2>
                    <p>At OPEN, We belive in three key principals</p>
                  </div>
                  <div className="just-gamers-list">
                    <ul>
                      <li>
                        <div className="just-gamers-list-icon">
                          <img src="assets/img/icon/gamer_list_icon01.png" alt="" />
                        </div>
                        <div className="just-gamers-list-content fix">
                          <h5>Aware</h5>
                          <p>We aim at spreading awareness about the advantage of using Open Source softwares over conventional proprietary softwares.</p>
                        </div>
                      </li>
                      <li>
                        <div className="just-gamers-list-icon">
                          <img src="assets/img/icon/gamer_list_icon02.png" alt="" />
                        </div>
                        <div className="just-gamers-list-content fix">
                          <h5>Adopt</h5>
                          <p>Spreading awareness is futile until and unless we motivate people to adopt the prevailing Open Source softwares in their work environment.</p>
                        </div>
                      </li>
                      <li>
                        <div className="just-gamers-list-icon">
                          <img src="assets/img/icon/gamer_list_icon03.png" alt="" />
                        </div>
                        <div className="just-gamers-list-content fix">
                          <h5>Contribute</h5>
                          <p>The whole concept of Open Source revolves around community which uses it and contributing to the community is always a matter of prestige.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-6 d-none d-lg-block">
                  <div className="just-gamers-img">
                    <img src="assets/img/images/just_gamers_img.png" alt="" className="just-gamers-character" />
                    <div className="just-gamers-circle-shape">
                      <img src="assets/img/images/gamers_circle_line.png" alt="" />
                      <img src="assets/img/images/gamers_circle_shape.png" alt="" className="rotateme" />
                    </div>
                    <img src="assets/img/images/just_gamers_chart.png" alt="" className="gamers-chart-shape" />
                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}

export default GamesAreatwo