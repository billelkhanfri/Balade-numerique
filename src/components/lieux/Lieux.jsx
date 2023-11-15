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
                  src="https://firebasestorage.googleapis.com/v0/b/react-balade.appspot.com/o/parcours-icons%2FLiberte%CC%81.png?alt=media&token=1bcddf7b-7226-44b1-b09b-64b5a1d3ac37"
                  alt="Custom Icon"
                />
                <span> Place de la Liberté</span>
              </div>

              <div className=" lieux-content-items">
                <img
                  className="custom-marker img-wrapper"
                  src="https://firebasestorage.googleapis.com/v0/b/react-balade.appspot.com/o/parcours-icons%2FSculpture-bateau.png?alt=media&token=38139be6-b14f-4ee4-b5dc-3513773eba9e"
                  alt="Custom Icon"
                />
                <span>Bateau sculpture</span>
              </div>
              <div className=" lieux-content-items">
                <img
                  className="custom-marker img-wrapper"
                  src="https://firebasestorage.googleapis.com/v0/b/react-balade.appspot.com/o/parcours-icons%2FRue-alger.png?alt=media&token=76766c12-4089-41cb-8aca-6808fad3dfe5"
                  alt="Custom Icon"
                />
                <span> Rue d'Alger</span>
              </div>
              <div className=" lieux-content-items">
                <img
                  className="custom-marker img-wrapper"
                  src="https://firebasestorage.googleapis.com/v0/b/react-balade.appspot.com/o/parcours-icons%2FCarre%CC%81e-du-port.png?alt=media&token=0d5ec8e8-1913-438a-b5dc-bd6568af8754"
                  alt="Custom Icon"
                />
                <span>Carré du port</span>
              </div>
              <div className=" lieux-content-items">
                <img
                  className="custom-marker img-wrapper"
                  src="https://firebasestorage.googleapis.com/v0/b/react-balade.appspot.com/o/parcours-icons%2FStade-Mayole.png?alt=media&token=87194f6a-98e5-45ab-9c01-98581b32eef9"
                  alt="Custom Icon"
                />
                <span> Stade Mayol</span>
              </div>
              <div className=" lieux-content-items">
                <img
                  className="custom-marker img-wrapper"
                  src="https://firebasestorage.googleapis.com/v0/b/react-balade.appspot.com/o/parcours-icons%2FCourt-Lafayette.png?alt=media&token=591bcb68-28d6-4f1c-8b9c-d82cd2388bff"
                  alt="Custom Icon"
                />
                <span>Marché de Provence</span>
              </div>

              <div className=" lieux-content-items">
                <img
                  className="custom-marker img-wrapper"
                  src="https://firebasestorage.googleapis.com/v0/b/react-balade.appspot.com/o/parcours-icons%2FCathe%CC%81drale-de-toulon.png?alt=media&token=c94eb9e0-e88c-4448-b0d5-e239d8275d2a"
                  alt="Custom Icon"
                />
                <span> La Cathédrale</span>
              </div>
              <div className=" lieux-content-items">
                <img
                  className="custom-marker img-wrapper"
                  src="https://firebasestorage.googleapis.com/v0/b/react-balade.appspot.com/o/parcours-icons%2FLavoir.png?alt=media&token=e46fb87e-bd9e-4cba-b02e-e2f6e0a37200"
                  alt="Custom Icon"
                />
                <span> Place Saint Vincent</span>
              </div>
              <div className=" lieux-content-items">
                <img
                  className="custom-marker img-wrapper"
                  src="https://firebasestorage.googleapis.com/v0/b/react-balade.appspot.com/o/parcours-icons%2FPlace-puget.png?alt=media&token=22e38f9f-53fe-4639-a125-6066b6296df6"
                  alt="Custom Icon"
                />
                <span>Place Puget</span>
              </div>
              <div className=" lieux-content-items">
                <img
                  className="custom-marker img-wrapper"
                  src="https://firebasestorage.googleapis.com/v0/b/react-balade.appspot.com/o/parcours-icons%2FOpe%CC%81ra.png?alt=media&token=cd494a14-6251-4453-9da8-c645331b2dc6"
                  alt="Custom Icon"
                />
                <span> L'opéra de Toulon</span>
              </div>
              <div className="button-wrapper">
                <button
                  className="lieux-content-button"
                  onClick={openGoogleMaps}
                >
                  Embarquer
                </button>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>{" "}
    </>
  );
}

export default Lieux;
