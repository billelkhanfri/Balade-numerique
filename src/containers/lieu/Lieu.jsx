import { useParams } from "react-router-dom";
// import { data } from "../../data/data.js";
import Navbar from "../../components/navbar/Navbar";
import "./lieu.css";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Slider from "../../components/slider/Slider.jsx";
import Collapse from "../../components/collapse/Collapse.jsx";
import AudioOrgan from "../../components/audio-organ/AudioOrgan.jsx";
import { useEffect, useState } from "react";

function Lieu() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch("/DB/data.json");
      if (!response) {
        throw new Error("il y'a un problem de connexion");
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(" erreur du fetch ", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const { lieuId } = useParams();
        console.log(data);

   const lieuData = data && data.find((lieu) => lieu.id == lieuId);
      // const {
      //   title,
      //   id,
      //   history_one,
      //   history_two,
      //   history_three,
      //   coup_coeurs,
      //   images,
      //   lecture,
      // } = lieuData;

  return (
    <>
      {lieuData && (
        <>
          <div className="lieu-item">
            <div className="item-head">
              <Link to="/">
                <IoIosArrowBack className="return-icon" />
              </Link>
              <h2>{lieuData.title}</h2>
              <IoIosArrowBack className="return-icon-transparent" />
            </div>
            <Slider images={lieuData.images} />
          </div>
          <AudioOrgan lecture={lieuData.lecture} />
          <div className="texts-wrapper">
            <p> {lieuData.history_one}</p>
            <p>{lieuData.history_two}</p>
            <p>{lieuData.history_three}</p>
          </div>
          <div className="coup-wrapper">
            {lieuData.coup_coeurs && (
              <h2>
                {" "}
                Découvrire notre séléction <br />
                coup de coeur
              </h2>
            )}
          </div>
          <Collapse coup_coeurs={lieuData.coup_coeurs} id={lieuData.id} />{" "}
        </>
      )}

      <Navbar />
    </>
  );
}

export default Lieu;
