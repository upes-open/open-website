import React, { useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Slider from 'react-slick';

import { DeployedProjectsData } from '../../data/DeployedProjectsData';
import { DeployProjectsImages } from '../../data/DeployProjectsImages';

function DeployedProjects() {
 
  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  let slider1,slider2;


  useEffect(function(){
    setNav1(slider1)
    setNav2(slider2)
  },[slider1,slider2])
   
  
  return (
  
	<section className="released-games-area gray-bg pt-115 pb-70">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-8">
                  <div className="section-title title-style-three text-center mb-20">
                    <h2>Deployed <span>Projects</span></h2>
                    <p>These are the projects that are made by members of the Open Community</p>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-xl-8 col-lg-12">
                  <Slider className="released-game-active"
                  asNavFor={nav2}
                  ref={slider => (slider1 = slider)}
                  arrows={false}
                  >
                    {DeployedProjectsData.map((data) => (
                    <div className="released-game-carousel">
                      <div className="released-game-item">
                        <div className="released-game-item-bg" />
                        <div className="released-game-img">
                          <img height={400} src={data.imageURL} alt="" />
                        </div>
                        <div className="released-game-content">
                          <h4>OPEN <span>{data.name}</span></h4>
                          <p>{data.description}</p>
                          <p>Technologies Used: {data.keywords}</p>
                          <Link to={data.link} className="btn btn-style-two">Know now</Link>
                        </div>
                      </div>
                    </div>
                    ))}
                  </Slider>
                </div>
                <div className="col-xl-4 col-lg-12">
                  <Slider className="released-game-nav" 
                  asNavFor={nav1}
                  swipeToSlide={true}
                  focusOnSelect={true}
                  ref={slider => (slider2 = slider)} slidesToShow={3} vertical={true} arrows={false} >
                    {/* here */}
                    {DeployProjectsImages.map((data) => (
                    <div className="released-game-nav-item">
                      <img src={data.imageURL} alt="" />
                    </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </section>
  )
}

export default DeployedProjects