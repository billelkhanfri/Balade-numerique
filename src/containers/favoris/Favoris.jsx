import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./favoris.css";
import { IoIosArrowBack } from "react-icons/io";
import Heart from "../../assets/images/1534109_220099-P1C6M7-980 1.png";
import { getDocs, collection } from "firebase/firestore";
import { firestore } from "../../firebase"; // Adjust the path accordingly

function Favoris() {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [data, setData] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

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

  useEffect(() => {
    const fetchFavorites = () => {
      // Retrieve favorite IDs from local storage
      const favoriteData = JSON.parse(localStorage.getItem("favorites")) || {};

      // Convert the object's values into an array of objects
      const favoriteIds = Object.values(favoriteData);

      // Filter data to get favorite items based on the retrieved IDs
      const filteredFavoriteItems = data.filter((item) =>
        favoriteIds.some((favoriteId) => favoriteId.id === item.id)
      );

      // Set the filtered favorite items in state
      setFavoriteItems(filteredFavoriteItems);
    };

    fetchFavorites();
  }, [data]);
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
  return (
    <>
      <div className="lieu-item">
        <div className={`item-head ${isScrolled ? "scrolled" : ""}`}>
          <Link to="/">
            <IoIosArrowBack className="return-icon" />
          </Link>
          <h2> Favoris</h2>
          <IoIosArrowBack className="return-icon-transparent" />
        </div>
      </div>

      {favoriteItems.length > 0 ? (
        <div className="favContainer">
          <div className=" thumbs-container">
            {favoriteItems.map((item) => (
              <Link to={`/lieu/${item.id}`} key={`${item.id}`}>
                <div className="thumb">
                  <div className="wrapper">
                    {item.coup_coeurs && (
                      <div className="coup-coeur-vignette">
                        {" "}
                        <p> Coup de Coeur ({item.coup_coeurs.length})</p>
                      </div>
                    )}

                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="thum-img"
                    />
                    <div className="text-wrapper" key={item.id}>
                      <h2>{item.title}</h2>
                      <p>{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="empty-fav">
          <img src={Heart} alt=" broken heart" />
          <p>C’est vide... Il n’y a aucun favoris</p>
        </div>
      )}

      <Navbar />
    </>
  );
}

export default Favoris;
