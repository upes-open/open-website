import React from "react";

import TimelineObserver from "react-timeline-animation";

import classes from "./timelinePage.module.css";
import TimelineCurrent from "./TimelineCurrent";


const Timeline = ({ setObserver, callback }) => {

  return (
    <div className={classes.wrapper}>
      <TimelineCurrent count='1' circleId='circle1' timelineId='timeline1' setObserver={setObserver}  />
      <TimelineCurrent count='2' circleId='circle2' timelineId='timeline2' setObserver={setObserver}  />
      <TimelineCurrent count='3' circleId='circle3' timelineId='timeline3' setObserver={setObserver}  />
      <TimelineCurrent count='4' circleId='circle4' timelineId='timeline4' setObserver={setObserver}  />
    
    </div>
  );
};

export default function App() {

  const onCallback = () => {
    console.log("awesome");
  };

  return (
    <div className={classes.app}>
    <div className={classes.stub1}></div>
      <TimelineObserver
        initialColor="#e5e5e5"
        fillColor="black"
        handleObserve={(setObserver) => (
          <Timeline
            callback={onCallback}
            className="timeline"
            setObserver={setObserver}
          />
        )}
      />
    </div>
  );
}
