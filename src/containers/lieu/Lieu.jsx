import { useParams } from "react-router-dom";
import { data } from "../../data/data.js";
import Navbar from "../../components/navbar/Navbar";
import "./lieu.css";
import {IoIosArrowBack} from "react-icons/io"
import { Link } from "react-router-dom";
import Slider from "../../components/slider/Slider.jsx";

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
    images,
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
         <Link to ="/"> 
        <IoIosArrowBack className="return-icon"/>
        </Link>
          <h2> {title}</h2>
          <IoIosArrowBack className="return-icon-transparent"/>
        </div>
        <Slider images={images}/>



</div>

        
      <Navbar />
    </>
  );
}

export default Lieu;
