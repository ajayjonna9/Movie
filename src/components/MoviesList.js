import React from "react";

import Movie from "./Movie";
import classes from "./MoviesList.module.css";

const MovieList = (props) => {
  return (
    <ul className={classes["movies-list"]}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.release_date}
          openingText={movie.opening_text}
          id={movie.id}
          delete={props.delete}
        />
      ))}
    </ul>
  );
};

export default MovieList;
