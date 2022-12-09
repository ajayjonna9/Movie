import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import axios from "axios";

function App() {
  const [moviearr, setMoviearr] = useState([]);
  const [isLoad, setisLoad] = useState(true);
  async function fetchingmovies() {
    try {
      setisLoad(false);
      const res = await axios.get("https://swapi.py4e.com/api/films");

      setMoviearr(res.data.results);
      setisLoad(true);
      console.log(res.data.results);
    } catch (err) {
      console.log("error", err);
    }
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchingmovies}>Fetch Movies</button>
      </section>
      <section>
        {isLoad ? (
          <MoviesList movies={moviearr} />
        ) : (
          <div className="spinner">
            <div className="loader"></div>
          </div>
        )}
      </section>
    </React.Fragment>
  );
}

export default App;
