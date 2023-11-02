import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";

function LeafletMachine() {
  const map = useMap();

  useEffect(() => {
    const waypoints = [
      L.latLng(43.12639961111021, 5.930514335632324),
      L.latLng(43.123174010156674, 5.93257506695695),
      L.latLng(43.12142095745307, 5.9319978115427565),
      L.latLng(43.12007266473213, 5.931721017717504),
      L.latLng(43.11900586846106, 5.936736189260646),
      L.latLng(43.121326754622004, 5.934564640175547),
      L.latLng(43.12165469161616, 5.933974953667892),
      L.latLng(43.12239778375607, 5.934633982047172),
      L.latLng(43.123633909824406, 5.9330221864107004),
      L.latLng(43.1244893904978, 5.932467694145099),
      L.latLng(43.12639961111021, 5.930514335632324),
    ];

    L.Routing.control({
      waypoints,
      profile: "foot", // Specify the profile as "foot" for pedestrians
      routeWhileDragging: true,

      routeLine: function (routeData) {
        return L.Routing.line(routeData, {
          styles: [{ color: "#00f", opacity: 0.7, weight: 6 }],
          addWaypoints: false,
        });
      },
    }).addTo(map);
  }, []);

  return null;
}

export default LeafletMachine;
