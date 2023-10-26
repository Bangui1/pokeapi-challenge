import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonHome from "./PokemonHome/PokemonHome";
import PokemonProfile from "PokemonProfile/PokemonProfile";
import Logo from "Logo/Logo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Logo />
        <Routes>
          <Route path="/" element={<PokemonHome />} />
          <Route path="/:id" element={<PokemonProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
