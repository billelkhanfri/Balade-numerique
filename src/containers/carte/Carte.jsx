import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Navbar from "../../components/navbar/Navbar";

function Carte() {
  return (
    <>
      <div className="lieu-item">
        <div className="item-head">
          <Link to="/">
            <IoIosArrowBack className="return-icon" />
          </Link>
          <h2>Carte</h2>
          <IoIosArrowBack className="return-icon-transparent" />
        </div>
      </div>
      <Navbar/>
    </>
  );
}

export default Carte;
