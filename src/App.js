import React, { useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import axios from "axios";

function App() {
  const [moviearr, setMoviearr] = useState([]);
  const [isLoad, setisLoad] = useState(true);
  const [isError, setisError] = useState(false);
  const [he, sethe] = useState(1);
  useEffect(() => {
    fetchingmovies();
  }, []);
  let content;
  async function fetchingmovies() {
    try {
      setisLoad(false);
      setisError(false);
      const res = await axios.get("https://swapi.py4e.com/api/films/");

      setMoviearr(res.data.results);

      console.log(res.data.results);
    } catch (err) {
      setisError(true);
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
  const click = () => {
    sethe(2);
  };
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchingmovies}>Fetch Movies</button>
      </section>
      <section>{content}</section>
      <button onClick={click}>hoo</button>
    </React.Fragment>
  );
}

export default App;
