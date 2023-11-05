import { useParams } from "react-router-dom";
import { data } from "../../data/data.js";
import Navbar from "../../components/navbar/Navbar";
import "./lieu.css";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Slider from "../../components/slider/Slider.jsx";
import Collapse from "../../components/collapse/Collapse.jsx";
import AudioOrgan from "../../components/audio-organ/AudioOrgan.jsx";

function Lieu() {
  const { lieuId } = useParams();
  const lieuData = data.find((lieu) => lieu.id == lieuId);
  const {
    title,
    id,
    history_one,
    history_two,
    history_three,
    coup_coeurs,
    images,
    lecture,
  } = lieuData;
  return (
    <>
      <div className="container ">
        <div className="lieu-item">
          <div className="item-head">
            <Link to="/">
              <IoIosArrowBack className="return-icon" />
            </Link>
            <h2> {title}</h2>
            <IoIosArrowBack className="return-icon-transparent" />
          </div>
          <Slider images={images} />
        </div>

        <AudioOrgan lecture={lecture} />

        <div className="texts-wrapper">
          <p> {history_one}</p>
          <p>{history_two}</p>
          <p>{history_three}</p>
        </div>
      </div>
      <div className="coup-wrapper">
        {coup_coeurs && (
          <h2>
            {" "}
            Découvrire notre séléction <br />
            coup de coeur
          </h2>
        )}
      </div>
      <Collapse coup_coeurs={coup_coeurs} id={id} />
      <Navbar />
    </>
  );
}

export default Lieu;
