import { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseFill } from "react-icons/ri";
import Logo from "../../assets/images/android-chrome-192x192.png"

const Navbar = () => {
  const [menuOpen, setMeuOpen] = useState(false);
  const toggleMenu = () => {
    setMeuOpen(!menuOpen);
  };
  return (
    <div className="navbar__bg">
      <div className="container">
        <nav className="navbar">
          <div className="navbar-logo">
            <a href="/">
               <img  className="logo" src={Logo} alt="" /> 
              </a>
          </div>

          <ul className={` navbar-menu ${menuOpen ? "open" : ""}`}>
            <li className="navbar-item">
              <a href="/accueil">Accueil</a>
            </li>

            <li className="navbar-item">
              <a href="/Lieux">Lieux</a>
            </li>
            <li className="navbar-item">
              <a href="/Carte">Carte</a>
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
