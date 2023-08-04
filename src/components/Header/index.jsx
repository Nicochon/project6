import { Link } from "react-router-dom";
import Logo from "../../assets/Vector.png";
import "../../scss/Header/index.scss";
function Header() {
  return (
    <div className="header_container">
      <Link to="/">
        <h1>
          K<img src={Logo} alt="logo" height="55px" />
          sa
        </h1>
      </Link>
      <nav>
        <Link className="nav_link" to="/">
          Accueil
        </Link>
        <Link className="nav_link" to="/Apropos">
          A propos
        </Link>
      </nav>
    </div>
  );
}

export default Header;
