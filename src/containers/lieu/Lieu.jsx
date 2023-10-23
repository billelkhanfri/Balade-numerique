import { useParams } from "react-router-dom";
import { data } from "../../data/data.js";
import Navbar from "../../components/navbar/Navbar";
import "./lieu.css";

function Lieu() {
  const { lieuId } = useParams();
  const lieuData = data.find((lieu) => lieu.id == lieuId);
  const {
    title,
    imageUrl,
    subtitle,
    id,
    history_one,
    coup_coeur_title,
    coup_coeur_text,
    coup_coeur_title2,
    coup_coeur_text2,
    coup_coeur_title3,
    coup_coeur_text3,
    coup_coeur_text4,
    coup_coeur_title4,
    coup_coeur_title5,
    coup_coeur_text5,
  } = lieuData;

  const itemWrapperStyle = {
    backgroundImage: `url(${imageUrl})`,
    height: `448px`,
    position: `relative`,
    width: `100%`,

    backgroundPosition: `center center, center `,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`,
    marginBottom: `370px`,
  };
  return (
    <>
      <div className="lieu-item">
        <div className="item-head">
          <h2> {title}</h2>
        </div>
        <div className="item-wrapper" style={itemWrapperStyle}>
          <div className="img-text">
            <p style={{ opacity: 1 }}>{history_one}</p>
          </div>
        </div>
        <div className="circle "> </div>
        <div className="coup-coeur">
          <h3>Découvrir notre sélection coup de coeur</h3>
        </div>
        <div></div>

        <div className="underline "></div>

        <div className="triangle"></div>

        <div className="historic-text">
          <h4>{coup_coeur_title}</h4>
          <p>{coup_coeur_text}</p>
        </div>
        <div className="historic-text">
          <h4>{coup_coeur_title2}</h4>
          <p>{coup_coeur_text2}</p>
        </div>
        <div className="historic-text">
          <h4>{coup_coeur_title3}</h4>
          <p>{coup_coeur_text3}</p>
        </div>
        <div className="historic-text">
          <h4>{coup_coeur_title4}</h4>
          <p>{coup_coeur_text4}</p>
        </div>
        <div className="historic-text">
          <h4>{coup_coeur_title5}</h4>
          <p>{coup_coeur_text5}</p>
        </div>
        <div className="breaker"></div>
      </div>
      <Navbar />
    </>
  );
}

export default Lieu;
