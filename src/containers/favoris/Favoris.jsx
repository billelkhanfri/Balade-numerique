import Navbar from "../../components/navbar/Navbar";
import { data } from "../../data/data.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./favoris.css"
import { IoIosArrowBack } from "react-icons/io";

function Favoris() {
  // State to hold the favorite items
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
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
  }, []);

  return (
    <>
      <div className="lieu-item">
        <div className="item-head">
          <Link to="/">
            <IoIosArrowBack className="return-icon" />
          </Link>
          <h2> Favorie</h2>
          <IoIosArrowBack className="return-icon-transparent" />
        </div>
      </div>
      <div className=" thumbs-container">
        {favoriteItems.map((item) => (
          <Link to={`/lieu/${item.id}`} key={`${item.id}`}>
            <div className="thumb">
              <div className="wrapper">
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
      <Navbar />
    </>
  );
}

export default Favoris;
