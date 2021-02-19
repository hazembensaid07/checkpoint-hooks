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
          <div key={el.objectID}>
            <MovieCard
              title={el.title}
              desc={el.description}
              postUrl={el.postUrl}
              rate={el.rate}
            />
          </div>
        ))}
    </div>
  );
};

export default MovieList;
