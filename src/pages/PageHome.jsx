import React from "react";
import LibertyHeader from "../components/basic/LibertyHeader/LibertyHeader";
import images from "../components/basic/LibertyHeader/icons/images.jpeg";
import PelimaxCard from "../components/PelimaxCard/PelimaxCard";
import PeliMaxFooter from "../components/basic/PeliMaxFooter/PeliMaxFooter";

const PageHome = () => {
  return (
    <div>
      <LibertyHeader />
      <PelimaxCard src={images} />
      <PeliMaxFooter />
    </div>
  );
};

export default PageHome;
