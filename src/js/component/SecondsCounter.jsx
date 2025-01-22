import React from "react";
import { IoTimer } from "react-icons/io5";

const SecondsCounter = ({ seconds }) => {
  return (
    <div className="container-fluid">
      <div className="row bg-dark text-white p-4 fs-4">
        <div className="col timerStyles"><IoTimer /></div>
        <div className="col timerStyles">0</div>
        <div className="col timerStyles">0</div>
        <div className="col timerStyles">{Math.floor(seconds / 1000) % 10}</div>
        <div className="col timerStyles">{Math.floor(seconds / 100) % 10}</div>
        <div className="col timerStyles">{Math.floor(seconds / 10) % 10}</div>
        <div className="col timerStyles">{Math.floor(seconds / 1) % 10}</div>
      </div>
    </div>
  );
};

export default SecondsCounter;

