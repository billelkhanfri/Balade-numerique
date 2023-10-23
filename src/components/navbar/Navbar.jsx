import "./navbar.css";
import { RiMenu3Line, RiCloseFill } from "react-icons/ri";

import { AiFillHome } from "react-icons/ai";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdPlace, MdFavorite } from "react-icons/md";
import { GiThreePointedShuriken } from "react-icons/gi";
import { PiPathBold } from "react-icons/pi";

import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMeuOpen] = useState(false);
  const toggleMenu = () => {
    setMeuOpen(!menuOpen);
  };
  return (
    <div className="container">
      <div className="break"></div>
      <div className="navbar__bg ">
        <nav className="navbar">
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
            <Link to="/liens" className="link">
              <li className="navbar-item">Liens utils</li>
            </Link>

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
