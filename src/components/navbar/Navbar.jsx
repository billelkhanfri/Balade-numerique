import "./navbar.css";
import { RiMenu3Line, RiCloseFill } from "react-icons/ri";

import { AiFillHome } from "react-icons/ai";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdPlace, MdFavorite } from "react-icons/md";
import { GiThreePointedShuriken } from "react-icons/gi";
import { PiPathBold } from "react-icons/pi";

import { Link,NavLink } from "react-router-dom";
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
          <NavLink className=" link" to="/" activeclassname="active">
            <ul className="menu">
              <li className="menu-item">
                <AiFillHome className="icons" />
                <p>Home</p>
              </li>
            </ul>
          </NavLink>

          <NavLink className=" link" to="/parcours" activeclassname="active">
            <ul className="menu">
              <li className="menu-item">
                <PiPathBold className="icons" />
                <p>Parcours</p>
              </li>
            </ul>
          </NavLink>
          <NavLink className=" link" to="/carte" activeclassname="active">
            <ul className="menu">
              <li className="menu-item">
                <FaMapMarkedAlt className="icons" />
                <p>Carte</p>
              </li>
            </ul>
          </NavLink>

          <NavLink className="link" to="/favoris" activeclassname="active">
            <ul className="menu">
            <li className="menu-item">
                <MdFavorite className="icons"/>
                <p>Favoris</p>
              </li>
            </ul>
              
            </NavLink>

       

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
