import * as React from "react";
import "./Component.css";
const Component = (props) => {
  return (
    <div className={`component ${props.className || ""}`}>
      <div className="rectangle-28">
        <span className="phone-0905859118">
          {props.phone || "Phone:0905859118"}
        </span>
      </div>
    </div>
  );
};
export default Component;