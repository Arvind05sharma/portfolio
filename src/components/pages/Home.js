import React from "react";
import "../../App.css";
import Cards from "../Cards";
import Footer from "../DefaultPages/Footer";
import LandingPage from "../HomePage/LandingPage";

function Home() {
  return (
    <>
      <LandingPage/>
      <Cards/>
      <Footer />
    </>
  );
}

export default Home;
