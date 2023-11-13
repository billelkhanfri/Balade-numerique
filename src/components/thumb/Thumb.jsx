import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./thumb.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function Thumb({ imageUrl, title, id, history_one, coup_coeurs }) {
  const [toggle, setToggle] = useState(false);

  // Load favorites from local storage on component mount
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || {};
    if (favorites[id]) {
      setToggle(true);
    }
  }, [id]);

  const handleToggle = (e) => {
    e.preventDefault(); // Prevent the default Link navigation
    const updatedFavorites =
      JSON.parse(localStorage.getItem("favorites")) || {};

    if (toggle) {
      // Remove the item from favorites
      delete updatedFavorites[id];
    } else {
      // Add the item to favorites
      updatedFavorites[id] = {
        imageUrl,
        title,
        id,
        history_one,
        coup_coeurs,
      };
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setToggle(!toggle);
  };

  return (
    <Link to={`/lieu/${id}`} key={`${id}`}>
      <div className="thumb">
        <div className="wrapper">
          {coup_coeurs && (
            <div className="coup-coeur-vignette">
              {" "}
              <p> Coup de Coeur ({coup_coeurs.length})</p>
            </div>
          )}

          <img className="thum-img" src={imageUrl} alt={title} />
          <div className="text-wrapper">
            <div>
              <h2>{title}</h2>
            </div>

            <div onClick={handleToggle} className="icon-wrapper">
              {!toggle ? (
                <AiOutlineHeart className="fav-icon" />
              ) : (
                <AiFillHeart className="fav-icon fill" />
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Thumb;
