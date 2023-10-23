import { useState } from "react";
import { Link } from "react-router-dom";
import "./thumb.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function Thumb({ 
  imageUrl, 
  title, 
  subtitle, 
  id,
  history_one, 
  coup_coeur_title,
  coup_coeur_text,
  coup_coeur_title2,
  coup_coeur_text2,
  coup_coeur_title3,
  coup_coeur_text3,
  coup_coeur_title4,
  coup_coeur_title5,
  coup_coeur_text5 
}) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault(); // Prevent the default Link navigation
    setToggle(!toggle);
  };

  return (
    <Link to={`/lieu/${id}`} key={`${id}`}>
      <div className="thumb">
        <div className="wrapper">
          <span onClick={handleToggle}>
            {!toggle ? <AiOutlineHeart className="fav-icon" /> : <AiFillHeart className="fav-icon fill" />}
          </span>
          <img className="thum-img" src={imageUrl} alt={title} />
        </div>
        <div className="text-wrapper">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
       
      </div>
    </Link>
  );
}

export default Thumb;
