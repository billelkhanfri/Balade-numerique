import "./App.css";
import Carte from "./containers/carte/Carte";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashScreen from "./components/splashScreen/SplashScreen";
import About from "./containers/about/About";

import Favoris from "./containers/favoris/Favoris";
import Liens from "./containers/liens-utils/Liens";
import Parcours from "./containers/parcours/Parcours";
import Lieu from "./containers/lieu/Lieu";
import Error from "./containers/error/Error";
import { useState, useEffect } from "react";
import Nointernet from "./containers/nointernet/Nointernet";
import Home from "./containers/home/Home";

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const handleRefresh = () => {
    window.location.reload(); // Reload the page
  };

  window.addEventListener("online", () => {
    setIsOnline(true);
  });

  window.addEventListener("offline", () => {
    setIsOnline(false);
  });
   useEffect(() => {
     const handleOrientationChange = () => {
       const isLandscape = window.matchMedia(
         "(orientation: landscape)"
       ).matches;
       if (isLandscape) {
         document.body.classList.add("landscape-mode");
       } else {
         document.body.classList.remove("landscape-mode");
       }
     };

     // Initial check
     handleOrientationChange();

     // Event listener for orientation change
     window.addEventListener("orientationchange", handleOrientationChange);

     // Clean up the event listener on component unmount
     return () => {
       window.removeEventListener("orientationchange", handleOrientationChange);
     };
   }, []);
  return (
    <BrowserRouter>
      <SplashScreen />
      {isOnline ? (
        <Routes>
          <Route path="/" element={<Home />}>
            {" "}
          </Route>
          <Route path="/carte" element={<Carte />}></Route>
          <Route path="/about" element={<About />}></Route>

          <Route path="/favoris" element={<Favoris />}></Route>
          <Route path="/liens" element={<Liens />}></Route>
          <Route path="/parcours" element={<Parcours />}></Route>
          <Route path="/lieu/:lieuId" element={<Lieu />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      ) : (
        <Nointernet onRefresh={handleRefresh} />
      )}
    </BrowserRouter>
  );
}

export default App;
