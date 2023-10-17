import { useState } from "react";
import { Link } from "react-router-dom";
import "./thumb.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function Thumb({ imageUrl, title, subtitle, id }) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
  return (
    <>
      <Link to={`/lieu/${id}`} key={`${id}`}>
        <div className="thumb">
          <div className="wrapper">
            {!toggle ? (
              <AiOutlineHeart className="fav-icon" onClick={handleToggle} />
            ) : (
              <AiFillHeart className="fav-icon fill" onClick={handleToggle} />
            )}

            <img className=" thum-img" src={imageUrl} alt={title} />
          </div>
          <div className="text-wrapper">
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Thumb;
