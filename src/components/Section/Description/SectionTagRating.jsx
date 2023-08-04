import starActive from "../../../assets/star-active.png";
import starInactive from "../../../assets/star-inactive.png";
import { Apartment } from "../../../assets/logement";
import { useParams } from "react-router-dom";

function SectionTagRating({ tags, infoLogement, hostname, hostpicture }) {
  const { KEY } = useParams();
  Apartment.map((Liste) =>
    Liste.id === KEY ? (infoLogement = { Liste }) : null
  );

  const range = [1, 2, 3, 4, 5];
  const scaleValue = infoLogement.Liste.rating;

  return (
    <div className="container_tags_ratings">
      <div className="tags_rating">
        <div className="tags">{tags}</div>
        <div className="stars_host">
          <div className="stars_pictures">
            {range.map((rangeElem) =>
              scaleValue >= rangeElem ? (
                <img
                  src={starActive}
                  alt="logo étoile pleine "
                  key={rangeElem.toString()}
                />
              ) : null
            )}
            {range.map((rangeElem) =>
              scaleValue < rangeElem ? (
                <img
                  src={starInactive}
                  alt="logo étoile grise "
                  key={rangeElem.toString()}
                />
              ) : null
            )}
          </div>
          <div className="display_block">
            <div className="profil">
              <div className="hostname">
                <h2>{hostname}</h2>
              </div>
              <div>
                <img
                  src={hostpicture}
                  alt="portrait du ou de la propriétaire"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTagRating;
