import React from 'react'
import Slider from 'react-slick';

import upes from '../../assets/img/sponsors/upes.png';
import stpi from '../../assets/img/sponsors/stpi.png';
import certificate from '../../assets/img/sponsors/certificate.png';
import teachmint from '../../assets/img/sponsors/teachmint.png';
import xebia from '../../assets/img/sponsors/xebia.png';
import ibm from '../../assets/img/sponsors/ibm.png';
import linuxfoundation from '../../assets/img/sponsors/linux-foundation.png';


function Brand() {
   const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll:1,
    center:false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          SlidesToScroll: 1,
        }
      },
      {
        breakpoint: 575,
        settings: {
          sidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  }
  return (
	 <div className="brand-area t-brand-bg">
            <div className="container custom-container">
              <Slider className="row s-brand-active" {...settings}>
                <div className="col-12">
                  <div className="t-brand-item">
                    <img src={upes} alt="" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="t-brand-item">
                    <img src={teachmint} alt="" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="t-brand-item">
                    <img src={linuxfoundation} alt="" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="t-brand-item">
                    <img src={xebia} alt="" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="t-brand-item">
                    <img src={ibm} alt="" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="t-brand-item">
                    <img src={certificate} alt="" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="t-brand-item">
                    <img src={stpi} alt="" />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
  )
}

export default Brand