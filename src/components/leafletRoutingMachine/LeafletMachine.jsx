import { useState, useEffect } from "react";
import { Polyline } from "react-leaflet";
import axios from "axios";
import PolylineEncoded from "polyline-encoded";

function LeafletMachine() {
  const [route, setRoute] = useState(null);

  useEffect(() => {
    const apiUrl =
      "https://api.openrouteservice.org/v2/directions/foot-walking";
    const apiKey = import.meta.env.VITE_REACT_APP_ROUTING_KEY;

    // Define your list of coordinates
    const coordinates = [
      [5.930706486183582, 43.125595696411985],
      [5.931185680628862, 43.12315834850046],
      [5.9319978115427565, 43.12142095745307],
      [5.931721017717504, 43.12007266473213],
      [5.936264157878827, 43.118230271891335],
      [5.934579922547775, 43.121159377958556],
      [5.933974953667892, 43.12165469161616],
      [5.934633982047172, 43.12239778375607],
      [5.9330221864107004, 43.123633909824406],
      [5.932617895972691, 43.124818277212775],
      [5.930395349941594, 43.12560352692708],
    ];

    // Filter out duplicate coordinates
    const uniqueCoordinates = [...new Set(coordinates.map(JSON.stringify))].map(
      JSON.parse
    );

    axios
      .post(
        apiUrl,
        {
          coordinates: uniqueCoordinates,
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (
          response.data &&
          response.data.routes &&
          response.data.routes.length > 0 &&
          response.data.routes[0].geometry
        ) {
          const routeData = response.data.routes[0];
          const encodedPolyline = routeData.geometry;
          const pathCoordinates = PolylineEncoded.decode(encodedPolyline);
          setRoute(pathCoordinates);
        } else {
          console.error("Route geometry or coordinates are missing.");
        }
      })
      .catch((error) => {
        console.error("Error fetching walking route:", error);
      });
  }, []);

  if (!route) {
    return null;
  }

  const polylineStyle = {
    color: "green",
    weight: 6, // Border weight (thickness)
    opacity: 1, // Border opacity (0 to 1)
    smoothFactor: 0.5, // Smoothing factor for curved lines (0 to 1)
    // dashArray: "9, 8", // Dashed line pattern (optional)
    lineJoin: "round", // Line join style ("miter," "round," "bevel")
    lineCap: "but", // Line cap style ("butt," "round," "square")
    fill: false, // Fill the area under the polyline
    fillOpacity: 0.2, // Fill opacity (0 to 1)
    bubblingMouseEvents: false, // Disable bubbling of mouse events
  };

  return <Polyline positions={route} pathOptions={polylineStyle} />;
}

export default LeafletMachine;
