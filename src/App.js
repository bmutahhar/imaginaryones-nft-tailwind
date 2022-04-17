import React, { useEffect } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Mint from "./components/Mint";
import OnBoardingScreen from "./components/OnBoardingScreen";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<OnBoardingScreen />}></Route>
        <Route path="/presale-mint" exact element={<Mint />}></Route>
      </Routes>
    </>
  );
}

export default App;
