const ClockContent = ({ hours, minutes, seconds }) => {
  return (
    <div className="clock-container">
      <h5 className="react-text">REACT</h5>
      <h5>Digital Clock</h5>
      <div className="time-display">
        <span className="time">{hours}</span>
        <span className="separator">:</span>
        <span className="time">{minutes}</span>
        <span className="separator">:</span>
        <span className="time">{seconds}</span>
      </div>
    </div>
  );
};
export default ClockContent;
