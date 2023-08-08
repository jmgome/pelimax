import React from "react";

export default function ({
  src,
  children,
  className,
  type,
  imageClassName,
  style,
  onClick,
  movies,
}) {
  console.log(movies);
  return (
    <div>
      {movies.map((movie, index) => (
        <div className="item" style={style} key={index}>
          {/* {src && ( */}
          <div className={`children ${imageClassName}`}>{children}</div>
          <div>
            <img src={movie.poster_path} imageClassName={imageClassName} />
          </div>
          <div>
            <h1>{movie.title}</h1>
          </div>
          <div>
            <h3>Sipnosis</h3>
            <p>{movie.overview}</p>
            <h2>calificación</h2>
            <h1>{movie.vote_average}</h1>
          </div>
          <div onClick={onClick} />
        </div>
      ))}
    </div>
  );
}
