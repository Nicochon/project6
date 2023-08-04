import Housing from "../../components/Logement";
import Banner from "../../components/Banner/home";
import React from "react";
import "../../scss/General/index.scss";
function Home() {
  return (
    <div>
      <Banner />
      <Housing />
    </div>
  );
}

export default Home;
