import PictureError from "../../assets/404.png";
import "../../scss/Error/index.scss";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error_container">
      <img src={PictureError} alt="logo 404" />
      <h1>Oups! La page que vous demandez n'existe pas</h1>
      <Link to="/">Retourner sur la page d'acceuil</Link>
    </div>
  );
}

export default Error;
