import "./error.css";
import Vector from "../../assets/images/Vector.svg";
function Error() {
  return (
    <div className="error-container">
      <div className="error-text">
        <p> ERREUR 404</p>
        <p> Page introuvable</p>
        <span>
          <img src={Vector} alt="" />{" "}
        </span>
      </div>
      <div className="bottom-circle">
        
      </div>
    </div>
  );
}

export default Error;
