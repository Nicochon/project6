import { Link } from "react-router-dom";
import "../../scss/Card/index.scss";
function Card({ title, cover, KEY }) {
  return (
    <div className="card_container">
      <div className="pictures_card">
        <img src={cover} alt="logement" height={340} />
        <div className="title_card">
          <Link to={`/description/${KEY}`} id={KEY}>
            {title}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
