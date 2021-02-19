import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({ moviesList, rate, title }) => {
  return (
    <div>
      {moviesList
        .filter(
          (el) =>
            el.rate >= rate &&
            el.title.toLowerCase().includes(title.toLowerCase())
        )
        .map((el) => (
          <MovieCard
            key={el.objectID}
            title={el.title}
            desc={el.description}
            postUrl={el.postUrl}
            rate={el.rate}
          />
        ))}
    </div>
  );
};

export default MovieList;
