import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import axios from "axios";

function App() {
  const [moviearr, setMoviearr] = useState([]);
  async function fetchingmovies() {
    try {
      const res = await axios.get("https://swapi.py4e.com/api/films");

      setMoviearr(res.data.results);
      console.log(res.data.results);
    } catch (err) {
      console.log("error", err);
    }
  }
  const dummyMovies = [
    {
      id: 1,
      title: "Some Dummy Movie",
      openingText: "This is the opening text of the movie",
      releaseDate: "2021-05-18",
    },
    {
      id: 2,
      title: "Some Dummy Movie 2",
      openingText: "This is the second opening text of the movie",
      releaseDate: "2021-05-19",
    },
  ];

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchingmovies}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={moviearr} />
      </section>
    </React.Fragment>
  );
}

export default App;
