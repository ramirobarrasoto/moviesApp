import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { addMovieFavorite, getMovies } from "../../actions/index.js";
import "./Buscador.css";

export default function Buscador() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.moviesLoaded);
  const [title, setTitle] = useState("");

  useEffect(() => {
    dispatch(getMovies(title));
  }, [dispatch]);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getMovies(title));
  };

  return (
    <div>
      <h2>Buscador</h2>
      <form className='form-container' onSubmit={handleSubmit}>
        <div>
          <label className='label' htmlFor='title'>
            Película:{" "}
          </label>
          <input
            type='text'
            id='title'
            autoComplete='off'
            value={title}
            onChange={handleChange}
          />
        </div>
        <button type='submit'>BUSCAR</button>
      </form>
      <ul>
        {movies ? (
          movies.map((movie) => (
            <div key={movie.imdbID}>
              <Link to={`/movie/${movie.imdbID}`}>
                <span>{movie.Title}</span>
              </Link>
              <button onClick={() => addMovieFavorite(movie)}>FAV</button>
            </div>
          ))
        ) : (
          <h2>BUSCA UNA PELICULA</h2>
        )}
      </ul>
    </div>
  );
}
