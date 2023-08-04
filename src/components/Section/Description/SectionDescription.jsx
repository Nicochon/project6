import React, { useState } from "react";
import fleche from "../../../assets/fleche.png";

function SectionDescription({ description }) {
  const [isActive, setActive] = useState("false");
  const [prevState, setPrevActive] = useState(undefined);

  const ToggleClass = () => {
    setActive(!isActive);
    setPrevActive(isActive);
  };

  return (
    <div className="panel">
      <div className="panel-title">
        <h3>Description</h3>
        <input
          type="checkbox"
          className="display_box"
          id="check-click-animation"
        />
        <label
          htmlFor="check-click-animation"
          className="button-about"
          onClick={() => ToggleClass()}
        >
          <img src={fleche} alt="logo fleche" />
        </label>
      </div>
      <div
        className={
          prevState === undefined
            ? "closed"
            : isActive
            ? "panel-content close"
            : "panel-content open"
        }
      >
        <p>{description}</p>
      </div>
    </div>
  );
}

export default SectionDescription;
