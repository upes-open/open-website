import React,{ useEffect } from 'react';
import 'magnific-popup';
import $ from 'jquery';
import {Link} from 'react-router-dom';

function AboutUsArea() {
	useEffect(()=>{

		$('.popup-video').magnificPopup({
			type: 'iframe'
		});
	},[])

  return (
	  <section className="about-us-area pt-90 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 order-0 order-lg-2">
                <div className="about-img">
                  {/* <img src="assets/img/images/about_us_img.jpg" alt="" /> */}
                  <iframe src="https://gusindia01-my.sharepoint.com/personal/opencommunity_ddn_upes_ac_in/_layouts/15/embed.aspx?UniqueId=96afd701-1864-40b3-b4e2-ee42b6b644f1&nav=%7B%22playbackOptions%22%3A%7B%22startTimeInSeconds%22%3A0%7D%7D&embed=%7B%22af%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" width="550" height="360" frameborder="0" scrolling="no" allowfullscreen title="Documentary .mp4"></iframe>
                  <Link to="/https://gusindia01-my.sharepoint.com/personal/opencommunity_ddn_upes_ac_in/_layouts/15/embed.aspx?UniqueId=96afd701-1864-40b3-b4e2-ee42b6b644f1&nav=%7B%22playbackOptions%22%3A%7B%22startTimeInSeconds%22%3A0%7D%7D&embed=%7B%22af%22%3Atrue%2C%22hvm%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" className="popup-video"></Link>
                </div>
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
