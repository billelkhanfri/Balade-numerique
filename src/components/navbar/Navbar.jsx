import "./navbar.css";
import { RiMenu3Line, RiCloseFill } from "react-icons/ri";

import { AiFillHome } from "react-icons/ai";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import { PiPathBold } from "react-icons/pi";

import { Link, NavLink } from "react-router-dom";
import { useState, useEffect} from "react";

const Navbar = () => {
  const [menuOpen, setMeuOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

   const handleScroll = () => {
     const currentScrollPos = window.pageYOffset;

     setVisible((prevVisible) => {
       const shouldShowNavbar =
         currentScrollPos < prevScrollPos || currentScrollPos < 10;

       if (shouldShowNavbar !== prevVisible) {
         setPrevScrollPos(currentScrollPos);
         return shouldShowNavbar;
       }

       return prevVisible;
     });
   };

   useEffect(() => {
     window.addEventListener("scroll", handleScroll);

     return () => {
       window.removeEventListener("scroll", handleScroll);
     };
   }, [prevScrollPos]);

  const toggleMenu = () => {
    setMeuOpen(!menuOpen);
  };
  return (
    <>
      <div className={`break ${visible ? "hidden" : "visible"}`}></div>
      <div className={`navbar__bg ${visible ? "hidden" : "visible"}`}>
        <nav className={`navbar ${visible ? "hidden" : "visible"}`}>
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
                <BsEmojiHeartEyesFill className="icons" />
                <p>Coup de coeur</p>
              </li>
            </ul>
          </NavLink>

          <NavLink className="link" to="/favoris" activeclassname="active">
            <ul className="menu">
              <li className="menu-item">
                <MdFavorite className="icons" />
                <p>Favoris</p>
              </li>
            </ul>
          </NavLink>

          <ul className={` navbar-menu ${menuOpen ? "open" : ""}`}>
            <Link to="/liens" className="link">
              <li className="navbar-item spesific">Liens utiles</li>
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
    </>
  );
};

export default Navbar;
