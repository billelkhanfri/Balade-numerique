import "./navbar.css";
import { RiMenu3Line, RiCloseFill } from "react-icons/ri";

import { AiFillHome } from "react-icons/ai";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdPlace, MdFavorite } from "react-icons/md";
import { GiThreePointedShuriken } from "react-icons/gi";
import { PiPathBold } from "react-icons/pi";

import Logo from "../../assets/images/android-chrome-192x192.png";
import { Link } from "react-router-dom";

const Navbar = ({ menuOpen, toggleMenu }) => {
  return (
    <div className="navbar__bg ">
      <div className="container">
        <nav className="navbar">
          {/* <div className="navbar-logo">
            <Link to="/">
              <img className="logo" src={Logo} alt="" />
            </Link>
          </div> */}
          <Link className=" link" to="/">
            <ul className="menu">
              <li className="menu-item">
                <AiFillHome className="icons" />
                <p>Home</p>
              </li>
            </ul>
          </Link>

          <Link className=" link" to="/parcours">
            <ul className="menu">
              <li className="menu-item">
                <PiPathBold className="icons" />
                <p>Parcours</p>
              </li>
            </ul>
          </Link>
          <Link className=" link" to="/carte">
            <ul className="menu">
              <li className="menu-item">
                <FaMapMarkedAlt className="icons" />
                <p>Carte</p>
              </li>
            </ul>
          </Link>

          <Link className=" link" to="/lieux">
            <ul className="menu">
              <li className="menu-item">
                <MdPlace className="icons" />

                <p>Lieux</p>
              </li>
            </ul>
          </Link>

          <ul className={` navbar-menu ${menuOpen ? "open" : ""}`}>
            <Link className="link" to="/circuit">
              <li className="navbar-item fav-item">
                <GiThreePointedShuriken className="fav-icons" />
                <span>Circuit</span>
              </li>
            </Link>
            <li className="navbar-item">
              <Link to="/liens">Liens utils</Link>
            </li>

            <Link className="link" to="/favoris">
              <li className="navbar-item fav-item">
                <MdFavorite className="fav-icons"></MdFavorite>
                <span>Favoris</span>
              </li>
            </Link>
            <Link className="link" to="/about">
              <li className="navbar-item">À propos</li>
            </Link>
          </ul>

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
