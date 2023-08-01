import React from "react";
import LibertyHeader from "../components/basic/LibertyHeader/LibertyHeader";
import images from "../components/basic/LibertyHeader/icons/images.jpeg";
import PelimaxCard from "../components/PelimaxCard/PelimaxCard";

const PageHome = () => {
  return (
    <div>
      <LibertyHeader />
      <PelimaxCard src={images} />
    </div>
  );
};

export default PageHome;
