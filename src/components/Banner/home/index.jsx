import Cliff from "../../../assets/falaise.png";
import "../../../scss/Banner/index.scss";

function Banner() {
  return (
    <div className="banner_container">
      <div className="banner">
        <img src={Cliff} alt="falaise" className="photo_banner" />
        <h2>Chez vous, partout et ailleurs</h2>
      </div>
    </div>
  );
}

export default Banner;
