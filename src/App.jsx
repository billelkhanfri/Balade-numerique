import "./App.css";
import Accueil from "./containers/accueil/Accueil";
import Lieux from "./containers/lieux/Lieux";
import Carte from "./containers/carte/Carte";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashScreen from "./components/splashScreen/splashScreen";
import About from "./containers/about/About";
import Circuit from "./containers/circuit/Circuit";
import Favoris from "./containers/favoris/Favoris";
import Liens from "./containers/liens-utils/Liens";
import Parcours from "./containers/parcours/Parcours";
import Lieu from "./containers/lieu/Lieu"
import Error from "./containers/error/Error"

function App() {
  return (
    <BrowserRouter>
      <SplashScreen />
      <Routes>
        <Route path="/" element={<Accueil />}>
          {" "}
        </Route>
        <Route path="/lieux" element={<Lieux />}></Route>
        <Route path="/carte" element={<Carte />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/circuit" element={<Circuit />}></Route>
        <Route path="/favoris" element={<Favoris />}></Route>
        <Route path="/liens" element={<Liens />}></Route>
        <Route path="/parcours" element={<Parcours />}></Route>
        <Route path="/lieu/:lieuId" element={<Lieu />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
