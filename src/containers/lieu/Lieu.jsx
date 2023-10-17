import { useParams } from "react-router-dom"
import { data } from "../../data/data.js";
import "./lieu.css"

function Lieu() {
    const { lieuId } = useParams();
    const lieuData = data.find((lieu) => lieu.id == lieuId);
  const { title, imageUrl, subtitle } = lieuData;
     
    return (
      <div> <h1>je suis dans {title}</h1></div>
    );
  }
  
  export default Lieu;
  