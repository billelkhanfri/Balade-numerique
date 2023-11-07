import React from "react";
import "./markerCard.css";
function MarkerCard({ selectedMarker }) {
  return (
    <div className="markerWrapper">
      <div className="cardWrapper">
        <div className="img-card-wrapper">
          <img className=" img-card" src={selectedMarker.image} alt="" />
        </div>

        <div className="card-text-wrapper">
          
            <h4> {selectedMarker.title}</h4>
         
        </div>
      </div>
    </div>
  );
}

export default MarkerCard;
