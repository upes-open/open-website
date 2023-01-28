import React from 'react'
import Slider from 'react-slick'

import team_img_1 from "../../assets/img/team/team_img_1.png";
import team_img_2 from "../../assets/img/team/team_img_2.png";
import team_img_3 from "../../assets/img/team/team_img_3.png";
import team_img_4 from "../../assets/img/team/team_img_4.png";
import team_img_5 from "../../assets/img/team/team_img_5.png";
import team_img_6 from "../../assets/img/team/team_img_6.png";
import team_img_7 from "../../assets/img/team/team_img_7.png";

function TeamGallery() {
	const settings = {

		dots: false,
		infinite: true,
		speed: 100,
		autoplay: true,
		arrows: false,
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 10,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: true,
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: true,
				}
			},
			{
				slidesToShow: 1
			}
		]
	}
	return (
		<div className="game-gallery-area position-relative">
			<div className="game-gallery-bg" />
			<div className="container-fluid p-0 fix">
				<Slider className="row game-gallery-active" {...settings}>
					<div className="col-12">
						<div className="game-gallery-item">
							<img style={{ borderRadius: '35px', width: '1100px', height: '550px' }} src={team_img_7} alt="" />
						</div>
					</div>
					<div className="col-12">
						<div className="game-gallery-item">
							<img style={{ borderRadius: '35px' }} src={team_img_1} alt="" />
						</div>
					</div>
					<div className="col-12">
						<div className="game-gallery-item">
							<img style={{ borderRadius: '35px' }} src={team_img_2} alt="" />
						</div>
					</div>
					<div className="col-12">
						<div className="game-gallery-item">
							<img style={{ borderRadius: '35px' }} src={team_img_3} alt="" />
						</div>
					</div>
					<div className="col-12">
						<div className="game-gallery-item">
							<img style={{ borderRadius: '35px' }} src={team_img_4} alt="" />
						</div>
					</div>
					<div className="col-12">
						<div className="game-gallery-item">
							<img style={{ borderRadius: '35px' }} src={team_img_5} alt="" />
						</div>
					</div>
					<div className="col-12">
						<div className="game-gallery-item">
							<img style={{ borderRadius: '35px' }} src={team_img_6} alt="" />
						</div>
					</div>
				</Slider>
			</div>
			<div className="slider-nav" />
		</div>
	)
}

export default TeamGallery