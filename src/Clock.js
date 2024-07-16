import { useState } from "react";

const Clock = () => {
  let [hours, setHours] = useState("");
  let [minutes, setMinutes] = useState("");
  let [seconds, setSeconds] = useState("");
  function times() {
    const time = new Date();
    let getHours = time.getHours().toString();
    let getMinutes = time.getMinutes().toString();
    let getSeconds = time.getSeconds().toString();
    if (getHours.length === 1) {
      getHours = "0" + getHours
    }
    setHours(getHours);
    if (getMinutes.length === 1) {
      getMinutes = "0" + getMinutes
    }
    setMinutes(getMinutes);
    if (getSeconds.length === 1) {
      getSeconds = "0" + getSeconds
    }
    setSeconds(getSeconds);
  }
  setInterval(times, 0)
  return (
    <div>
      <h5>Digital Clock</h5>
      <h4>{hours} : {minutes} : {seconds}</h4>
    </div>
  )
}
export default Clock;