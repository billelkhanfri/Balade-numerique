import  React,{ useEffect, useState } from 'react';
import L from 'leaflet';
import { useMap } from 'react-leaflet';
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
function LeafletGeoCoder() {
  const map = useMap();
  const [geocoderControl, setGeocoderControl] = useState(null);
  useEffect(() => {
    if (!geocoderControl) {
      // Create the geocoder control and set it in the state
      const control = L.Control.geocoder({
        defaultMarkGeocode: false,
      })
        .on('markgeocode', function (e) {
         
        })
        .addTo(map);
  
      setGeocoderControl(control);
    }
  }, [geocoderControl, map]);
  
  console.log('Rendered LeafletGeoCoder component');

  return null;
}

export default React.memo(LeafletGeoCoder);
