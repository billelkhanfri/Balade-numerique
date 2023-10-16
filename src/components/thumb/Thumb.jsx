import { Link } from "react-router-dom";
import "./thumb.css";

function Thumb({ imageUrl, title, subtitle }) {
  return (
    <>
      <Link to="">
        <div className="thumbnail ">
          <div className="thumbnail-image">
            <img src={imageUrl} alt={title} />
            <div className="overlay"></div>
            <div className="thumbnail-content">
              <h2>{title}</h2>
              <p>{subtitle}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Thumb;
