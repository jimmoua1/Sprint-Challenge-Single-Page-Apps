import React from "react";

import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import { Route } from "react-router-dom"; 

export default function App() {
  return (
    <main data-testid='app'>
      <Header />
    </main>
  );
}
