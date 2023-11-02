import "./lieux.css";
import { useState } from "react";
import { GiWalk, GiPathDistance } from "react-icons/gi";

function Lieux() {
  const [menuActive, setMenuActive] = useState(true);
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const openGoogleMaps = () => {
    const destination = "43.12566961111021,5.930514335632324";
    const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
    window.open(url, "_blank");
  };
  return (
    <>
      <div className="lieux-wrapper" onClick={toggleMenu}>
        <div className={`menu-wrapper ${menuActive ? "active" : ""}`}>
          <button className="button-scroll"></button>
          <div className="lieux-content">
            <div className="lieux-content-info">
              <div className="lieux-content-time">
                <GiPathDistance className="icons" />
                <p> 2,69 km</p>
              </div>
              <div className="lieux-content-time">
                <GiWalk className="icons" />
                <p> 2h00</p>
              </div>
            </div>
            <div className="lieux-content-title">
              {" "}
              <h2>Promenade dans le centre ville de Toulon</h2>
              <h5>
                Tout public :{" "}
                <span>
                  {" "}
                  Le parcours est destiné à toute personne disposant d’un
                  smartphone.
                </span>
              </h5>
              <p> Points à visiter</p>
            </div>

            <div className="lieux-content-wrapper">
              <div className=" lieux-content-items">
                <img
                  className="custom-marker img-wrapper"
                  src="/src/assets/icones-pics/Liberté.png"
                  alt="Custom Icon"
                />
                <span> Place de la Liberté</span>
              </div>

              <div className=" lieux-content-items">
                <img
                  className="custom-marker img-wrapper"
                  src="/src/assets/icones-pics/Sculpture-bateau.png"
                  alt="Custom Icon"
                />
                <span>Bateau sculpture</span>
              </div>
              <div className=" lieux-content-items">
                <img
                  className="custom-marker img-wrapper"
                  src="/src/assets/icones-pics/Rue-Alger.png"
                  alt="Custom Icon"
                />
                <span> Rue d'Alger</span>
              </div>
              <div className=" lieux-content-items">
                <img
                  className="custom-marker img-wrapper"
                  src="/src/assets/icones-pics/Carrée-du-port.png"
                  alt="Custom Icon"
                />
                <span>Carré du port</span>
              </div>
              <div className=" lieux-content-items">
                <img
                  className="custom-marker img-wrapper"
                  src="/src/assets/icones-pics/Stade-Mayole.png"
                  alt="Custom Icon"
                />
                <span> Stade Mayol</span>
              </div>
              <div className=" lieux-content-items">
                <img
                  className="custom-marker img-wrapper"
                  src="/src/assets/icones-pics/Court-Lafayette.png"
                  alt="Custom Icon"
                />
                <span>Marché de Provence</span>
              </div>

              <div className=" lieux-content-items">
                <img
                  className="custom-marker img-wrapper"
                  src="/src/assets/icones-pics/Cathédrale-de-toulon.png"
                  alt="Custom Icon"
                />
                <span> La Cathédrale</span>
              </div>
              <div className=" lieux-content-items">
                <img
                  className="custom-marker img-wrapper"
                  src="/src/assets/icones-pics/Lavoir.png"
                  alt="Custom Icon"
                />
                <span> Place Saint Vincent</span>
              </div>
              <div className=" lieux-content-items">
                <img
                  className="custom-marker img-wrapper"
                  src="/src/assets/icones-pics/Place-puget.png"
                  alt="Custom Icon"
                />
                <span>Place Puget</span>
              </div>
              <div className=" lieux-content-items">
                <img
                  className="custom-marker img-wrapper"
                  src="/src/assets/icones-pics/Opéra.png"
                  alt="Custom Icon"
                />
                <span> L'opéra de Toulon</span>
              </div>
            </div>
            <div className="button-wrapper">
              <button className="lieux-content-button" onClick={openGoogleMaps}>
                Embarquer
              </button>
            </div>
          </div>
        </div>{" "}
      </div>{" "}
    </>
  );
}

export default Lieux;

// const markers = [
//   {
//     lat: 43.12566961111021,
//     lng: 5.930514335632324,
//     label: "Place de la Liberté",
//   },
//   { lat: 43.12314987182617, lng: 5.931080341339111, label: "Marker 2" },
//   { lat: 43.1207308, lng: 5.9314906, label: "Marker 3" },
//   { lat: 43.11996078491211, lng: 5.932811737060547, label: "Marker 4" },
//   { lat: 43.11900586846106, lng: 5.936736189260646, label: "Stade Mayol" },
//   { lat: 43.121326754622004, lng: 5.934564640175547, label: "Marker 6" },
//   { lat: 43.12165469161616, lng: 5.933974953667892, label: "Marker 7" },
//   { lat: 43.12239778375607, lng: 5.934633982047172, label: "Marker 8" },
//   { lat: 43.123485152129774, lng: 5.932922946465119, label: "Marker 9" },
//   { lat: 43.1244893904978, lng: 5.932467694145099, label: "Marker 10" },
//   { lat: 43.12566961111021, lng: 5.930514335632324, label: "Marker 1" },
// ];
