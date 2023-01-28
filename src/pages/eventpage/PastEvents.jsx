import React from 'react'
import { EventsData } from '../../data/EventsData';


function PastEvents() {
  return (
	  <section className="upcoming-opens-area upcoming-opens-bg pt-40 pb-80">
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-4">
              <div className="section-title title-style-three black-title text-center mb-70">
                <h2>Passed <span>Events</span></h2>
                <p>Compete with 100 players on a remote island for winner takes showdown
                  known issue where certain skin strategic</p>
              </div>
            </div>
          </div>
          <div className="row">
          {EventsData.map((data) => (     
            <div className="col-lg-4 col-md-6">
              <div className="upcoming-open-item mb-40">
                <div className="upcoming-open-head">
                  <div className="uc-open-head-title">
                    <span>{data.date}</span>
                    <h4><a href="/#">{data.name}</a></h4>
                  </div>
                  <div className="uc-open-price">
                    <h5>{data.type}</h5>
                  </div>
                </div>
                <div className="upcoming-open-thumb">
                  <img src={data.imageURL} alt="" />
                  <div className="upcoming-open-cart">
                    <a href={data.registeration} className="btn transparent-btn">Know Now</a>
                  </div>
                </div>
                <br />
                <p>{data.description}</p>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default PastEvents