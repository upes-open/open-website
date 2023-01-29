import React, { useState, useEffect} from 'react';
import Slider from "react-slick";
import axios from "axios";

const OurContributors = () => {

  const [index, setIndex] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetch = async () => {
    const fetchResult = await axios.get(
      "https://api.github.com/users/upes-open/followers"
    );
    const fetchData = fetchResult.data;
    console.log(fetchData);
    // console.log(fetchData[0].name);
    // fetchData = Object.keys(fetchData);

    setData(fetchData);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    fetch();
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);


  // const [user, setUser] = useState([])

  // useEffect(()=>{
  //     axios.get("https://api.github.com/users/upes-open/followers")
  //     .then((res)=>{setUser(res.data)})
  // },[])

  const settings= {

  dots: false,
  infinite: true,
  speed: 10000,
  autoplay: true,
  arrows: false,
  prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 10,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 5,
        infinite: true,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 4
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
		slidesToShow:1
	}
  ]
  }
  return (
    <section className="shop-area home-four-shop-area pt-115 pb-90">
    <div className="container">
      <br /><br /><br /><br />
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-8">
          <div className="section-title home-four-title text-center mb-35">
            <h2>Our <span>Contributors</span></h2>
            {/* <p>Compete with 100 players on a remote island for winner takes showdown known issue where certain skin strategic</p> */}
          </div>
        </div>
      </div>
      <Slider className="row product-active"{...settings}>
      {/* <div className='row justify-content-center'> */}
      {data.map((result) => (
        <div className="col-xl">
          <div className="shop-item">
            <div className="product-thumb">
              <a href="/#"><img src={result.avatar_url} alt="" /></a>
            </div>
            <div className="product-content">
              <div className="product-tag"><a href={result.html_url}>{result.login}</a></div>
              {/* <h4><a href="/#">Raghav Agarwal</a></h4> */}
            </div>
          </div>
        </div>
      ))}
      </Slider>
      {/* </div> */}
    </div>
  </section>
  )
}

export default OurContributors