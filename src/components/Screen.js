import React from "react";
import "./Screen.css";

const Screen = ({ value }) => {
  return (
    <div className="screen">
      <p>{value}</p>
    </div>
  );
};

export default Screen;