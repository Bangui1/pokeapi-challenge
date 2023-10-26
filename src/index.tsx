import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./PokemonHome/index.css";
import "./PokemonProfile/profile.css";
import "./Loader/loader.css";
import "./TypeCard/types.css";
import "./PokemonProfile/Evolutions/evolution.css";
import "./Logo/logo.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(<App />);
