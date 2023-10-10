import "./navbar.css";
import { RiMenu3Line, RiCloseFill } from "react-icons/ri";
import Logo from "../../assets/images/android-chrome-192x192.png";
import { Link } from "react-router-dom";

const Navbar = ({ menuOpen, toggleMenu }) => {
  return (
    <div className="navbar__bg">
      <div className="container">
        <nav className="navbar">
          <div className="navbar-logo">
            <Link to="/">
              <img className="logo" src={Logo} alt="" />
            </Link>
          </div>

          <ul className={` navbar-menu ${menuOpen ? "open" : ""}`}>
            <li className="navbar-item">
              <Link to="/">Accueil</Link>
            </li>

            <li className="navbar-item">
              <Link to="/lieux">Lieux</Link>
            </li>
            <li className="navbar-item">
              <Link to="/carte">Carte</Link>
            </li>
          </ul>

          <div className={` contact ${menuOpen ? "open-button" : ""}`}>
            <a>Embarquement</a>
          </div>

          <div className="toggle-menu">
            {menuOpen ? (
              <RiCloseFill className=" closed-icone" onClick={toggleMenu} />
            ) : (
              <RiMenu3Line className="menu__icone" onClick={toggleMenu} />
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
