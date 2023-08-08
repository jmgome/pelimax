import React, { useEffect, useState } from "react";
import LibertyHeader from "../components/basic/LibertyHeader/LibertyHeader";

// import PelimaxCard from "../components/PelimaxCard/PelimaxCard";
import axios from "axios";
import { PeliMaxBody } from "../components/basic/PeliMaxBody/PeliMaxBody";
import PeliMaxFooter from "../components/basic/PeliMaxFooter/PeliMaxFooter";

const PageHome = () => {
  const [pelis, setPelis] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=11adee67babce066144cf1f4c2caf0ee&language=es-MX"
    );
    setPelis(res.data.results);
    console.log(res.data.results);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <LibertyHeader />
      <div>
        <input
          type="text"
          placeholder="Buscar Pelicula"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <PeliMaxBody movies={pelis} search={search} />
      <PeliMaxFooter/>
    </div>
    
  );
};

export default PageHome;
