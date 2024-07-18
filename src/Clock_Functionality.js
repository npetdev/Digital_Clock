import { useState } from "react";
import ClockContent from "./Clock_Content";
import "./App.css";
const ClockFunctionality = () => {
  let [hours, setHours] = useState("");
  let [minutes, setMinutes] = useState("");
  let [seconds, setSeconds] = useState("");
  function times() {
    const time = new Date();
    let getHours = time.getHours().toString();
    let getMinutes = time.getMinutes().toString();
    let getSeconds = time.getSeconds().toString();
    if (getHours.length === 1) {
      getHours = "0" + getHours;
    }
    setHours(getHours);
    if (getMinutes.length === 1) {
      getMinutes = "0" + getMinutes;
    }
    setMinutes(getMinutes);
    if (getSeconds.length === 1) {
      getSeconds = "0" + getSeconds;
    }
    setSeconds(getSeconds);
  }
  setInterval(times, 0);
  return (
  <ClockContent 
  hours={hours} 
  minutes={minutes} 
  seconds={seconds} />
     );
};

export default ClockFunctionality;
