import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HomePage from "../HomePage/HomePage";
import AboutMe from "../aboutMe/AboutMe";

function Home() {
  return (
    <>
      <HomePage/>
      {/* <AboutMe/> */}
      <Cards />
    </>
  );
}

export default Home;
