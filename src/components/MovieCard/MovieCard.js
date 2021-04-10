import React from 'react';
import { NavLink } from 'react-router-dom';

import './MovieCard.scss';
import Default from '../../assets/img/default_poster.jpg';

export default function MovieCard({ movie }) {
  return (
    <div className='movie-card'>
      <span className='movie-card__title' data-tooltip='I’m the tooltip text.'>
        {movie.Title}
      </span>
      <img
        className='movie-card__img'
        src={movie.Poster || Default}
        alt={`movie poster for ${movie.Title}`}
      />
      <span className='movie-card__year' title={movie.Title}>
        Year: {movie.Year}
      </span>
      <span className='movie-card__type'>Movie Type: {movie.Type}</span>
      <NavLink
        to={`/movie-details/${movie.imdbID}`}
        className='movie-card__details'
      >
        Details
      </NavLink>
    </div>
  );
}
