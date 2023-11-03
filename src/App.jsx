import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import Row_post from "./Components/Row_post/Row_post";
import { Action, Trending, Documtries } from "./Urls";

function App() {
  return (
    <div className="">
      <NavBar />
      <Banner />
      <Row_post url={Trending} title={"Netflix Originals"} />
      <Row_post url={Action} title={"Action Movies"} isSmall />
      <Row_post url={Documtries} title={"Documtries"} isSmall />
    </div>
  );
}

export default App;
