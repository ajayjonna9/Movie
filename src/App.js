import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import axios from "axios";
import Form from "./components/Form";

function App() {
  const [moviearr, setMoviearr] = useState([]);
  const [isLoad, setisLoad] = useState(true);
  const [isError, setisError] = useState(false);

  let content;
  const fetchingmovies = useCallback(async () => {
    try {
      setisLoad(false);
      setisError(false);
      const res = await axios.get(
        "https://movies-eaa4d-default-rtdb.firebaseio.com/movies.json"
      );
      console.log(res.data);
      const moviedata = [];
      for (let i in res.data) {
        let data = res.data[i];
        data = {
          ...data,
          id: i,
        };

        moviedata.push(data);
      }
      console.log(moviedata);

      setMoviearr(moviedata);
    } catch (err) {
      setisError(true);
    }
    setisLoad(true);
  }, []);
  const onDelete = async (id) => {
    try {
      const res = await axios.delete(
        `https://movies-eaa4d-default-rtdb.firebaseio.com/movies/${id}.json`
      );
      setMoviearr((pre) => {
        const newarr = pre.filter((item) => {
          return item.id !== id;
        });
        return newarr;
      });
      console.log(res);
    } catch (err) {}
  };
  if (isLoad) {
    content = <MoviesList movies={moviearr} delete={onDelete} />;
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

  const addMovie = async (obj) => {
    console.log(obj);
    const Obj = JSON.stringify(obj);
    const res = await axios.post(
      "https://movies-eaa4d-default-rtdb.firebaseio.com/movies.json",
      Obj
    );
    console.log(res);
    fetchingmovies();
  };
  useEffect(() => {
    fetchingmovies();
  }, [fetchingmovies]);
  return (
    <React.Fragment>
      <section>
        <Form addmovie={addMovie} />
      </section>
      <section>
        <button onClick={fetchingmovies}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
