import Navbar from "../../components/navbar/Navbar";
import { data } from "../../data/data.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./favoris.css";
import { IoIosArrowBack } from "react-icons/io";
import Heart from "../../assets/images/1534109_220099-P1C6M7-980 1.png";

function Favoris() {
  // State to hold the favorite items
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    // Retrieve favorite IDs from local storage
    const favoriteData = JSON.parse(localStorage.getItem("favorites")) || {};
    console.log(favoriteData);
    // Convert the object's values into an array of objects
    const favoriteIds = Object.values(favoriteData);

    // Filter data to get favorite items based on the retrieved IDs
    const filteredFavoriteItems = data.filter((item) =>
      favoriteIds.some((favoriteId) => favoriteId.id === item.id)
    );

    // Set the filtered favorite items in state
    setFavoriteItems(filteredFavoriteItems);
  }, []);

  return (
    <>
      <div className="lieu-item">
        <div className="item-head">
          <Link to="/">
            <IoIosArrowBack className="return-icon" />
          </Link>
          <h2> Favoris</h2>
          <IoIosArrowBack className="return-icon-transparent" />
        </div>
      </div>

      {favoriteItems.length > 0 ? (
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
