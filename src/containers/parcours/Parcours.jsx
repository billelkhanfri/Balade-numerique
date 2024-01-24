import "./parcours.css";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import Lieux from "../../components/lieux/Lieux.jsx";
import LeafletMachine from "../../components/leafletRoutingMachine/LeafletMachine.jsx";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { divIcon } from "leaflet";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { getDocs, collection } from "firebase/firestore";
import { firestore } from "../../firebase"; 
import { FaDirections } from "react-icons/fa";
import L from "leaflet";



function Parcours() {
     const [position, setPosition] = useState([0,0]);
     const [error, setError] = useState(null);

     useEffect(() => {
       if ("geolocation" in navigator) {
         navigator.geolocation.getCurrentPosition(
           (position) => {
             const { latitude, longitude } = position.coords;
             setPosition([latitude, longitude]);
           },
           (error) => {
             setError("Failed to get your location.");
           }
         );
       } else {
         setError("Geolocation is not supported by your browser.");
       }
     }, []);

  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

const [selectedMarkerId, setSelectedMarkerId] = useState(null);

const handleMarkerClick = (marker) => {
  setSelectedMarkerId(marker);

};
  const openGoogleMaps = () => {
    if (selectedMarkerId) {
      const { position } = selectedMarkerId;
      console.log(selectedMarkerId)
      const destination = `${position[0]},${position[1]}`;
      const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
      window.open(url, "_blank");
    }
  };


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, "places"));
        const newData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(newData);
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that this effect runs once after the initial render

  const customIcons = [
    divIcon({
      html: '<div class="img-wrapper"><img class="custom-marker" src="https://rm83.fr/balade/wp-content/uploads/2024/01/Liberte.png" alt="Custom Icon" /></div>',
      className: "custom-marker-icon",
    }),
    divIcon({
      html: '<div class="img-wrapper"><img class="custom-marker" src="https://rm83.fr/balade/wp-content/uploads/2024/01/Sculpture-bateau.png" alt="Custom Icon" /></div>',
      className: "custom-marker-icon",
    }),

    divIcon({
      html: '<div class="img-wrapper"><img class="custom-marker" src="https://rm83.fr/balade/wp-content/uploads/2024/01/Rue-alger.png" alt="Custom Icon" /></div>',
      className: "custom-marker-icon",
    }),
    divIcon({
      html: '<div class="img-wrapper"><img class="custom-marker" src="https://rm83.fr/balade/wp-content/uploads/2024/01/Carree-du-port.png" alt="Custom Icon" /></div>',
      className: "custom-marker-icon",
    }),
    divIcon({
      html: '<div class="img-wrapper"><img class="custom-marker" src="https://rm83.fr/balade/wp-content/uploads/2024/01/Stade-Mayole.png" alt="Custom Icon" /></div>',
      className: "custom-marker-icon",
    }),
    divIcon({
      html: '<div class="img-wrapper alger"><img class="custom-marker" src="https://rm83.fr/balade/wp-content/uploads/2024/01/Court-Lafayette.png" alt="Custom Icon" /></div>',
      className: "custom-marker-icon",
    }),
    divIcon({
      html: '<div class="img-wrapper"><img class="custom-marker" src="https://rm83.fr/balade/wp-content/uploads/2024/01/Cathedrale-de-toulon-1.png" alt="Custom Icon" /></div>',
      className: "custom-marker-icon",
    }),
    divIcon({
      html: '<div class="img-wrapper alger"><img class="custom-marker" src="https://rm83.fr/balade/wp-content/uploads/2024/01/Lavoir.png" alt="Custom Icon" /></div>',
      className: "custom-marker-icon",
    }),

    divIcon({
      html: '<div class="img-wrapper alger"><img class="custom-marker" src="https://rm83.fr/balade/wp-content/uploads/2024/01/Place-puget.png" alt="Custom Icon" /></div>',
      className: "custom-marker-icon",
    }),
    divIcon({
      html: '<div class="img-wrapper"><img class="custom-marker" src="https://rm83.fr/balade/wp-content/uploads/2024/01/Opera.png" alt="Custom Icon" /></div>',
      className: "custom-marker-icon",
    }),
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 8; // Adjust the threshold as needed

      setIsScrolled(scrollY > threshold && scrollY > prevScrollY);
      setPrevScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);
const customIcon = L.divIcon({
  className: "custom-icon",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});
  return (
    <>
      <div className="scrolling">
        <div className="scroll-to-top-icon" onClick={scrollToTop}>
          <FaArrowUp />
        </div>
        <div className="scroll-to-bottom-icon" onClick={scrollToBottom}>
          <FaArrowDown />
        </div>
      </div>

      <div className="lieu-item">
        <div className={`item-head ${isScrolled ? "scrolled" : ""}`}>
          <Link to="/">
            <IoIosArrowBack className="return-icon" />
          </Link>
          <h2> Parcours</h2>
          <IoIosArrowBack className="return-icon-transparent" />
        </div>

        {selectedMarkerId && (
          <div className="map-button container" onClick={openGoogleMaps}>
            <button className="button">
              {selectedMarkerId.title}
              <FaDirections className="bt-icon" />
            </button>
          </div>
        )}
      </div>
        <MapContainer center={[43.1204778356, 5.933236982047172]} zoom={13}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {error ? (
            <p>{error}</p>
          ) : (
            <Marker position={position} icon={customIcon}>
              <Popup>Ma position</Popup>
            </Marker>
          )}
          {data &&
            data.map((marker) => (
              <Marker
                key={marker.id}
                position={[marker.position[0], marker.position[1]]}
                icon={customIcons[marker.id]}
                eventHandlers={{
                  click: (e) => {
                    handleMarkerClick(marker);
                  },
                }}
              ></Marker>
            ))}

          <LeafletMachine />
        </MapContainer>

        <Lieux />
    </>
  );
}

export default Parcours;
