import React, { useMemo } from "react";
import PelimaxCard from "../../PelimaxCard/PelimaxCard";
// import images from "../components/basic/LibertyHeader/icons/images.jpeg";
import images from "../../../components/basic/LibertyHeader/icons/images.jpeg";
import "./PeliMaxBody.scss";

export const PeliMaxBody = ({ movies, search }) => {
  const filterPeliculas = useMemo(() => {
    if (!search) return movies;
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, movies]);

  return (
    <div className="container_PelimaxBody">
      {filterPeliculas.map(() => (
        <PelimaxCard movies={filterPeliculas} />
      ))}
    </div>
  );
};
