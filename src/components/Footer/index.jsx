import "../../scss/Footer/index.scss";
import Logo from "../../assets/Vector_blanc.png";
function Footer() {
  return (
    <footer>
      <h1>
        K<img src={Logo} alt="logo" height="26px" width="31" />
        sa
      </h1>
      <div className="droit">© 2020 Kasa. All rights reserved</div>
    </footer>
  );
}

export default Footer;
