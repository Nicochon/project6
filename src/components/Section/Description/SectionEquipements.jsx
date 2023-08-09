import React, { useState } from "react";
import fleche from "../../../assets/fleche.png";
import "../../../scss/Section/description/infos_appartement.scss";

function SectionEquipements({ equipments }) {
  const [isActive, setActive] = useState("false");
  const [prevState, setPrevActive] = useState(undefined);
  const ToggleClass = () => {
    setActive(!isActive);
    setPrevActive(isActive);
  };

  return (
    <div className="panel">
      <div className="panel-title">
        <h3>Équipement</h3>
        <input
          type="checkbox"
          id="check-click-equipment"
          className="display_box"
        />
        <label
          htmlFor="check-click-equipment"
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
        <ul>{equipments}</ul>
      </div>
    </div>
  );
}

export default SectionEquipements;
