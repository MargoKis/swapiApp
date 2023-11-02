import React from "react";
import { Route, Routes } from "react-router-dom";
import BlockOfButtons from "../src/molecules/BlockOfButtons";
// import AppProvider from "../src/organisms/AppProvider";
import BlockOfPeople from "../src/molecules/BlockOfPeople";
import BlockOfStarships from "../src/molecules/BlockOfStarships";
import BlockOfPlanets from "../src/molecules/BlockOfPlanets";

function App() {
  return (
    // <AppProvider>
    <>
      <BlockOfButtons />
      <Routes>
        <Route path="/people" element={BlockOfPeople} />
        <Route path="/starships" element={BlockOfStarships} />
        <Route path="/planets" element={BlockOfPlanets} />
      </Routes>
    </>
    // </AppProvider>
  );
}

export default App;
