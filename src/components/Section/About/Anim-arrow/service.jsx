import React, { useState } from "react";
import fleche from "../../../../assets/fleche.png";

function ServiceAnim() {
  const [isActive, setActive] = useState("false");
  const [prevState, setPrevActive] = useState(undefined);

  const handleChange = () => {
    setActive(!isActive);
    setPrevActive(isActive);
  };

  return (
    <div className="section_accordion-about">
      <div className="panel-title-about">
        <h3>Service</h3>
        <input
          type="checkbox"
          id="check-click-service"
          className="display_box"
        />
        <label
          htmlFor="check-click-service"
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
          la bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou perturbation du voisinage entraînera
          une exclusion de notre plateforme.
        </p>
      </div>
    </div>
  );
}

export default ServiceAnim;
