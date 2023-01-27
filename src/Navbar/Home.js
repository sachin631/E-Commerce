import React from "react";
import Featurepage from "../components/Featurepage";
import HeroComponent from "../components/HeroComponent";
import Services from "../components/Services";
import Trusted from "../components/Trusted";


function Home() {
  
  return (
    <div>
      <HeroComponent name="Sangwan Store" />
      <Featurepage/>
      <Services />
      <Trusted />
    </div>
  );
}

export default Home;
