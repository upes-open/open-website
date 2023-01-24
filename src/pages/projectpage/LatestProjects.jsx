import React, { useEffect, useState } from "react";
import axios from "axios";

function LatestMatch() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetch = async () => {
    const fetchResult = await axios.get(
      "https://api.github.com/users/upes-open/repos"
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

  return (
	 <section className="latest-match-area latest-match-bg pt-115 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title title-style-three white-title text-center mb-70">
                <h2>Our <span>Projects</span></h2>
                <p>Compete with 100 players on a remote island for winner takes showdown
                  known issue where certain skin strategic</p>
              </div>
            </div>
          </div>
          <div className="row">
          {data.map((result) => (
            <div className="col-lg-6">
              <div className="latest-match-box mb-30">
                <div className="tournament-schedule-content">
                  <h3><a href={result.html_url}><span>{result.name}</span></a></h3>
                  <p>{result.description}</p>
                  <div className="tournament-schedule-meta">
                    <a href={result.html_url}>Know More</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>
  )
}

export default LatestMatch