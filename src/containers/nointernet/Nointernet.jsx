import Vector from "../../assets/images/Vector.svg";
import "./nointernet.css";
import Logo from "../../assets/images/android-chrome-192x192.png";


function Nointernet({ onRefresh }) {
  return (
    <>
      <div className="logo-header">
        <img src={Logo} alt="" />
      </div>
      <div className="error-container">
        <div className="internet-text">
          <span>
            <img src={Vector} alt="" />{" "}
          </span>
          <p> Vérifiez votre accès à internet avant de continuer...</p>
        </div>
        <button onClick={onRefresh} className="connexion">
          Connexion
        </button>
      </div>
    </>
  );
}

export default Nointernet;
