import React from 'react'
import Slider from 'react-slick';
import { EventsGlimpse} from '../../data/EventsGlimpse';


const BannerArea = () => {


    const settings ={
    dots: false,
	infinite: true,
	speed: 1000,
	autoplay: true,
	arrows: false,
	centerMode: true,
	centerPadding: '0',
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 2,
				arrows: false,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: false,
			}
		},
	]
    }

  return (
    <section className="home-six-banner">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="banner-content">
            <h2 className="title-one">Glimpse</h2>
            <h3 className="title-two">of our <span>events</span></h3>
          </div>
          <Slider className="banner-magazine-active" {...settings}>
            {EventsGlimpse.map((item) => (
                    <div className="banner-magazine-item red">
                    <div className="banner-magazine-thumb">
                        <div className="tags"><a href="/#">{item.Type}</a></div>
                        <img src={item.imageURL} alt="" />
                    </div>
                    <div className="banner-magazine-content">
                        <span className="date">{item.Date}</span>
                        <h5 className="title"><a href="/#">{item.name}</a></h5>
                    </div>
                    </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  </section>
  )
}

export default BannerArea