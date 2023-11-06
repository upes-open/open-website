import React, { useEffect } from 'react';
import WOW from "wowjs";
import {Link} from 'react-router-dom';
import image from '../../assets/img/images/Mediamorph.jpg';


function MediaMorph() {
  useEffect(() => {
    new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: false,
      live: true,
      loop: Infinity,
    }).init();

  }, [])

  return (
    <section className="inner-about-area fix">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
            <div className="inner-about-img">
              <img width="550px" height="600px" src={image} className="wow fadeInRight" data-wow-delay=".3s" alt="" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="section-title title-style-three black-title text-center mb-70">
              <br></br>
              <br></br>
              <br></br>
              <h2>PROJECT<span>  DESCRIPTION</span></h2>
            </div>
            <div className="inner-about-content">
              <h5>MediaMorph</h5>
              <p><strong>Tags:</strong> Functionality and UI, Accessibility</p>

              <strong style={{ color: 'black' }}>MediaMorph: Elevate Your Video Experience</strong>

              <p>Introducing MediaMorph, the ultimate Chrome extension for transforming your video-watching adventures. This powerful tool enhances video player functionalities, allowing you to take control of your content like never before.</p>

              <strong style={{ color: 'black' }}>Key Features:</strong>

              <p>
                <li>1. Video Speed Mastery: Adjust video playback speed with precision, whether you're binge-watching or seeking to save time.</li>
                <li>2. Sound Amplifier: Boost audio up to 200% for crystal-clear sound, even in the quietest moments.</li>
                <li>3. Text Extraction Made Easy: Extract text from videos effortlessly with Optical Character Recognition (OCR) capabilities.</li>
                <li>4. Clickable Video Links: Say goodbye to missed opportunities; now you can click on video links directly within the player.</li>
                <li>5. Picture-in-Picture Perfection: Multitask like a pro with resizable and movable picture-in-picture viewing.</li>
                <li>6. YouTube Shorts Control: Seamlessly navigate and control YouTube Shorts content with dedicated features.</li>
              </p>

              <p>Elevate your video-watching experience today with MediaMorph</p>
              <br></br>
              <br></br>
              <Link to="/privacy" className="btn btn-style-two">Privacy Policy</Link><tab></tab>
              
              <a href="https://github.com/upes-open/MediaMorph" className="btn btn-style-two">Know More</a>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MediaMorph;
