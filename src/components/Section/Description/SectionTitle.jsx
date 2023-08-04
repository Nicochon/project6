import PropTypes from "prop-types";
function SectionTitle({ title, logement, hostname, hostpicture }) {
  return (
    <div className="Container_section_title">
      <div className="title_profil">
        <div className="title_localisation">
          <h1>{title}</h1>
          <p>{logement}</p>
        </div>
        <div className="display_block">
          <div className="profil">
            <div className="hostname">
              <p>{hostname}</p>
            </div>
            <div>
              <img src={hostpicture} alt="portrait du ou de la propriétaire" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

SectionTitle.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string,
  picture: PropTypes.string,
};

export default SectionTitle;
