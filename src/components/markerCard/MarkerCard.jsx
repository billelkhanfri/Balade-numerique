import React from "react";
import "./markerCard.css";
function MarkerCard({ selectedMarker }) {
  return <div> {selectedMarker.title}</div>;
}

export default MarkerCard;
