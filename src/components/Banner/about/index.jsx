import Mountain from "../../../assets/montagne.png";
import "../../../scss/Banner/index.scss";
function BannerAbout() {
  return (
    <div className="banner_container">
      <div className="banner">
        <img src={Mountain} alt="falaise" className="photo_banner" />
      </div>
    </div>
  );
}

export default BannerAbout;
