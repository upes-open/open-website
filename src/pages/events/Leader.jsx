import React from "react";
import { osocData } from "../../data/Osoc24Data";

function SingleArea() {
  const rankStyle={
    rankOne:{
      backgroundColor:"gold"
    },
    rankTwo:{
      backgroundColor:"silver"
    },
    rankThree:{
      backgroundColor:"black",
      color:"white",
    }
  }
  function getRankStyle(rank) {
    if (rank === 1) {
      return rankStyle.rankOne;
    } else if (rank === 2) {
      return rankStyle.rankTwo;
    } else if (rank === 3) {
      return rankStyle.rankThree;
    } else {
      return {};
    }
  }
  return (
    <section className="open-single-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="open-single-content">
              <div className="upcoming-open-head">
                <div className="uc-open-head-title">
                  <span>01-07-2024 to 31-07-2024</span>
                  <h4>OPEN Summer Of Code 2024</h4>
                </div>
                <div className="uc-open-price">
                  <h5>Leaderboard</h5>
                </div>
              </div>
              <table class="table table-striped">
                <thead>
                  <tr >
                    <th style={{fontSize:'20px'}} scope="col">Rank</th>
                    <th style={{fontSize:'20px'}}  scope="col">Name</th>
                    <th style={{fontSize:'20px'}}  scope="col">Github</th>
                    <th style={{fontSize:'20px'}}  scope="col">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {osocData.map((data,index)=>(
                    <tr key={data["Github ID"]}>
                    <th scope="row" style={getRankStyle(index+1)}>{index+1}</th>
                    <td>{data.Name}</td>
                    <td>{data["Github ID"]}</td>
                    <td>{data.Points}</td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleArea;
