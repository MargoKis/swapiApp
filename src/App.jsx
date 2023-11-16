import React from "react";
import { Route, Routes } from "react-router-dom";
import People from "./pages/Block/People";
import Person from "./pages/Details/Person";
import Starships from "./pages/Block/Starships";
import Starship from "./pages/Details/Starship";
import Planets from "./pages/Block/Planets";
import Planet from "./pages/Details/Planet";
import { PaginationProvider } from "./context/PaginationContext";
import Header from "./molecules/Header";
import "./index.css";
import { store } from './api/store';

function App() {
  return (
    <>
      <Header />
      <PaginationProvider store={store}>
        <Routes>
          <Route exact path="/people" element={<People />} />
          <Route exact path="/people/:id" element={<Person />} />

          <Route path="/starships" element={<Starships />} />
          <Route path="/starships/:id" element={<Starship />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/planets/:id" element={<Planet />} />
        </Routes>
      </PaginationProvider>
    </>
  );
}

export default App;
