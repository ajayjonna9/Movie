import React, { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [formValues, setFormValues] = useState({
    title: "",
    opening_text: "",
    release_date: "",
  });
  const onChangeValues = (e) => {
    if (e.target.name === "title") {
      setFormValues((pre) => {
        return { ...pre, title: e.target.value };
      });
    }
    if (e.target.name === "openingtext") {
      setFormValues((pre) => {
        return { ...pre, opening_text: e.target.value };
      });
    }
    if (e.target.name === "releasedate") {
      setFormValues((pre) => {
        return { ...pre, release_date: e.target.value };
      });
    }
  };
  const onAddMovie = (e) => {
    e.preventDefault();
    props.addmovie(formValues);
  };
  return (
    <form onSubmit={onAddMovie}>
      <h3>Title</h3>
      <input
        type="text"
        name="title"
        size="50"
        onChange={onChangeValues}
        required
      ></input>
      <h3>Opening text</h3>
      <input
        type="text"
        name="openingtext"
        size="50"
        onChange={onChangeValues}
        required
      ></input>
      <h3>Release Date</h3>
      <input
        type="date"
        name="releasedate"
        size="50"
        onChange={onChangeValues}
        required
      ></input>
      <button type="submit">ADD MOVIE</button>
    </form>
  );
};

export default Form;
