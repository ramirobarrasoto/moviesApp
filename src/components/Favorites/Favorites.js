import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite } from "../../actions/index";
import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {
            this.props.movies && this.props.movies.map(movie => (
              <div>
                <Link to={`/movie/${movie.imdbID}`}>
                  <span>{movie.Title}</span>
                </Link>
                <button onClick={() => this.props.removeMovieFavorite(movie.imdbID)}>X</button>
              </div>
            ))
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesFavourites
  };
}

// Action Creator --> removeMovieFavorite
//
// Favourite --> Agregando una prop "asd" --> asd("tt01100")
//   --> store.dispatch(removeMovieFavorite("tt01100"))

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: idMovie => dispatch(removeMovieFavorite(idMovie))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);
