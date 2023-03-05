import * as React from "react";
import "./Email.css";
const Email = (props) => {
  return (
    <div className={`email ${props.className || ""}`}>
      <div className="rectangle-27">
        {props.eMailuteamjeffreygm || "E-mail:uteamjeffrey@gmail.com"}
      </div>
    </div>
  );
};
export default Email;