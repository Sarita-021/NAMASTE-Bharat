import React from "react";
// import Navbar from "./Home/Navbar"
import HeroSection from "./Home/Section";
import Section2 from "./Home/Section2";
import AutoSlider from "./Home/Autoslider";
import Calendar from "./Home/Calender";
import Favtour from "./Home/Favtour";
import Mapnavi from "./Home/Mapnavi";

function Home() {
  return (
    <div>
      <br />
      <HeroSection />
      <br />
      <Section2 />
      <br />
      <AutoSlider />
      <Favtour />
      <Calendar />
      <Mapnavi />
    </div>
  );
}

export default Home;
