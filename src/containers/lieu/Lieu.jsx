import { useParams } from "react-router-dom";
import { data } from "../../data/data.js";
import Navbar from "../../components/navbar/Navbar";
import "./lieu.css";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Slider from "../../components/slider/Slider.jsx";
import { BsPlayFill, BsPauseFill, BsStopFill } from "react-icons/bs";
import { useState, useRef, useEffect } from "react"; // Import useEffect
import audioFile from "../../assets/audio/X2Download.app - Khaled - Aicha (128 kbps).mp3";

function Lieu() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioDuration, setAudioDuration] = useState(0);
  const [audioCurrentTime, setAudioCurrentTime] = useState(0);

  const audioRef = useRef(null);

  useEffect(() => {
    // Update the audioDuration state when the audio metadata is loaded
    audioRef.current.addEventListener("loadedmetadata", () => {
      setAudioDuration(audioRef.current.duration);
    });

    // Update the audioCurrentTime state every second
    const interval = setInterval(() => {
      setAudioCurrentTime(audioRef.current.currentTime);
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const playAudio = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pauseAudio = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const stopAudio = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  const getIconColor = () => (isPlaying ? "#ffcf0d" : "rgb(151, 151, 151)");
  const getIconpause = () => (isPlaying ? "rgb(151, 151, 151)" : "#ffcf0d");

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
  return (
    <>
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

      <div className="audio">
        <audio
          ref={audioRef}
          src={audioFile}
          onEnded={() => setIsPlaying(false)}
        ></audio>
        <div className="custom-audio-controls">
          <BsPlayFill
            style={{ color: getIconColor() }}
            className="audio-icons"
            onClick={playAudio}
          />
          <BsPauseFill
            className="audio-icons"
            style={{ color: getIconpause() }}
            onClick={pauseAudio}
          />
          <BsStopFill
            className="audio-icons"
            style={{ color: getIconpause() }}
            onClick={stopAudio}
          />
        </div>
      </div>
      <progress
        max={audioDuration}
        value={audioCurrentTime}
        className="audio-progress-bar"
      />

      <Navbar />
    </>
  );
}

export default Lieu;
