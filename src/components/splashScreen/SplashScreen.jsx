import { useEffect, useState } from "react";
import "./splashScreen.css";
import Logo from "../../assets/images/android-chrome-192x192.png";

const SplashScreen = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const interval = setTimeout(() => {
      setShow(false);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {show && (
        <div className="intro">
          <img src={Logo} alt="image-logo" className="logo-img" />
        </div>
      )}
    </>
  );
};
export default SplashScreen;
