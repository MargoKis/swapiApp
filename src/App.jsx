import React from "react";
import { Route, Routes } from "react-router-dom";
import People from "./pages/People";
import Person from "./pages/details/Person";
import Starships from "./pages/Starships";
import Starship from "./pages/Details/Starship";
import Planets from "./pages/Planets";
import Planet from "./pages/Details/Planet";
import Header from "./molecules/Header";
import Error404 from "./molecules/Error404";
import "./index.css";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Header />} />
        <Route exact path="/people" element={<People />} />
        <Route exact path="/people/:id" element={<Person />} />
        <Route exact path="/starships" element={<Starships />} />
        <Route exact path="/starships/:id" element={<Starship />} />
        <Route exact path="/planets" element={<Planets />} />
        <Route exact path="/planets/:id" element={<Planet />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
