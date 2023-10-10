import "./App.css";
import Accueil from "./containers/accueil/Accueil";
import Lieux from "./containers/lieux/Lieux";
import Carte from "./containers/carte/Carte";

function App() {
  return (
    <>
      <Accueil />
      <Lieux />
      <Carte />
    </>
  );
}

export default App;
