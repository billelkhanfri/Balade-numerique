import  { useEffect, useState } from "react";
import Logo from "../../assets/images/android-chrome-192x192.png";
import "./banner.css";

function Banner() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

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
      <div className={`bannerHead ${isScrolled ? "scrolled" : ""}`}>
        <h1>BALADE NUMÉRIQUE</h1>
      </div>
      <div className="banner-wrapper">
        <img src={Logo} alt="image de Toulon" />
        <div className="banner-slogan">
          <p>
            Elle S'appelait <span className="telo">Telo</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Banner;
