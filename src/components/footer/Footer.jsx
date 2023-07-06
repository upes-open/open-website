import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/img/logo.png";

function Footer() {
  return (
	
      <footer>
        <div className="footer-top footer-bg third-footer-bg">
          <div className="container custom-container">
            <div className="row justify-content-between">
              <div className="col-lg-6">
                <div className="footer-widget mb-50">
                  <div className="logo mb-35">
                    <Link to="/index-3"><img src={logo} height="80px" alt="" /></Link>
                  </div>
                  <div className="fw-text">
                    <p>OPEN is an open source community under the University of Petroleum and Energy Studies, Dehradun, working with the aim of educating young minds about open source development practises and increasing their contributions in the world of open source.</p>
                    <div className="fw-social">
                      <ul>
                        <li><a href="https://twitter.com/UpesOpen"><span className="fab fa-twitter" /></a></li>
                        <li><a href="https://discord.gg/FyFgtY27Wf"><span className="fab fa-discord"/></a></li>
                        <li><a href="https://github.com/upes-open"><span className="fab fa-github"/></a></li>
                        <li><a href="https://www.instagram.com/upesopen_/"><span className="fab fa-instagram" /></a></li>
                        <li><a href="https://www.youtube.com/channel/UCxdpyRSNdAKQ6R6Jpv_-nKQ"><span className="fab fa-youtube" /></a></li>
                        <li><a href="https://www.linkedin.com/company/open-community/mycompany/"><span className="fab fa-linkedin" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-5">
                <div className="footer-widget text-right mb-50">
                  <div className="fw-title mb-35">
                    <h3>Quick <span>Link</span></h3>
                  </div>
                  <div className="fw-quick-link">
                    <ul>
                    <li><a href="/learning">Learning Program</a></li>
                      <li><a href="/about">About Us</a></li>
                      <li><a href="/project">Our Projects</a></li>
                      <li><a href="/event">Our Events</a></li>
                      <li><a href="/contact">Contact Us</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-wrap third-copyright-wrap">
          <div className="container custom-container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="copyright-text">
                  <p>Copyright © 2023 <Link to="/">OPEN Community</Link> All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer