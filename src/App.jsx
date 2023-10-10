import "./App.css";
import Accueil from "./containers/accueil/Accueil";
import Lieux from "./containers/lieux/Lieux";
import Carte from "./containers/carte/Carte";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashScreen from "./components/splashScreen/splashScreen";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
