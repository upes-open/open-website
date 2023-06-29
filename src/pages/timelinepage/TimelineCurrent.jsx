import { useState } from "react";
import classes from "./timelinePage.module.css";
import { useRef } from "react";
import { useEffect } from "react";

const TimelineContent = () => {
  return (
    <div className={classes.timelineContent}>
      <h3>Title</h3>
      <h1 className={classes.contentDate}>Date</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum necessitatibus iusto voluptatibus alias voluptas at ea similique, minus porro non ipsam aut est provident, commodi dolorem mollitia natus, quidem quo!</p>
    </div>
  )
}

const TimelineCurrent = ({circleId, setObserver, timelineId, count}) => {

    const [message, setMessage] = useState(null);

    const circleRef = useRef(null);
    const timelineRef = useRef(null);

    const someCallback = () => {
        setMessage(<TimelineContent /> );
    }

  useEffect(() => {
    setObserver(timelineRef.current);
    setObserver(circleRef.current, someCallback);
  }, []);


    return (
        <>
        <div id={timelineId} ref={timelineRef} className={classes.timeline} />
        <div className={classes.circleWrapper}>
            <div id={circleId} ref={circleRef} className={classes.circle}>{count}</div>
            <div className={classes.message}>{message}</div>
        </div>
        </>
    )
} 

export default TimelineCurrent;