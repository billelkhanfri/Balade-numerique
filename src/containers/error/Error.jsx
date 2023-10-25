import "./error.css";
import Vector from "../../assets/images/Vector.svg";
import Navbar from "../../components/navbar/Navbar";
function Error() {
  return (
    <>
   
    <div className="error-container">
      <div className="error-text">
        <p>  404</p>
        <p> Page introuvable</p>
        <span>
          <img src={Vector} alt="" />{" "}
        </span>
      </div>
      <div className="bottom-circle">
        
      </div>
    </div>
    <Navbar></Navbar>
    </>
  );
}

export default Error;
