import React, { useState } from "react";
import fleche from "../../../../assets/fleche.png";

function ReliabilityAnim() {
  const [isActive, setActive] = useState("false");
  const [prevState, setPrevActive] = useState(undefined);

  const handleChange = () => {
    setActive(!isActive);
    setPrevActive(isActive);
  };
  return (
    <div className="section_accordion-about">
      <div className="panel-title-about">
        <h3>Fiabilité</h3>
        <input
          type="checkbox"
          className="display_box"
          id="check-click-animation"
        />
        <label
          htmlFor="check-click-animation"
          className="button-about"
          onClick={() => handleChange()}
        >
          <img src={fleche} alt="logo fleche" />
        </label>
      </div>
      <div
        className={
          prevState === undefined
            ? "closed"
            : isActive
            ? "panel-content-about close"
            : "panel-content-about open"
        }
      >
        <p>
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </p>
      </div>
    </div>
  );
}

export default ReliabilityAnim;
