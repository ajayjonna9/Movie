import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import axios from "axios";

function App() {
  const [moviearr, setMoviearr] = useState([]);
  const [isLoad, setisLoad] = useState(true);
  const [isError, setisError] = useState(false);
  let errormsg = "Somthing went wrong";
  let content;
  async function fetchingmovies() {
    try {
      setisLoad(false);
      setisError(false);
      const res = await axios.get("https://swapi.py4e.com/api/film");

      setMoviearr(res.data.results);

      console.log(res.data.results);
    } catch (err) {
      setisError(true);

      console.log(errormsg);
    }
    setisLoad(true);
  }
  if (isLoad && moviearr.length > 0) {
    content = <MoviesList movies={moviearr} />;
  }
  if (!isLoad) {
    content = (
      <div className="spinner">
        <div className="loader"></div>
      </div>
    );
  }
  if (isError && isLoad) {
    content = "Somthing went wrong";
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchingmovies}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
