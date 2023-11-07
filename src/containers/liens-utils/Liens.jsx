import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

function Liens() {
  return (
    <>
      <div className="lieu-item">
        <div className="item-head">
          <Link to="/">
            <IoIosArrowBack className="return-icon" />
          </Link>
          <h2>Lien Utiles</h2>
          <IoIosArrowBack className="return-icon-transparent" />
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default Liens;
