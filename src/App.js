import React, { useState } from "react";
import { Form } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import "./App.css";

import AddMovie from "./AddMovie/AddMovie";
import MovieList from "./MovieList/MovieList";
import Filter from "./Filter/Filter";

const App = () => {
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState(0);
  const [moviesList, setMoviesList] = useState([
    { title: "Matrix", Description: "horor", postUrl: "hhhh", rate: 2 },
  ]);
  const addMovie = (movie) => setMoviesList([...moviesList, ...movie]);

  return (
    <div>
      <AddMovie addMovie={addMovie} />
      <Filter setTitle={setTitle} setRate={setRate} title={title} rate={rate} />
      {<MovieList moviesList={moviesList} rate={rate} title={title} />}
    </div>
  );
};

export default App;
