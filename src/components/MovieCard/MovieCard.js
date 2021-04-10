import React from 'react';
import { NavLink } from 'react-router-dom';

import './MovieCard.scss';
import Default from '../../assets/img/default_poster.jpg';

export default function MovieCard({
  movie: { Title, Poster, Year, imdbID, Type },
}) {
  return (
    <div className='movie-card'>
      <span className='movie-card__title'>{Title}</span>
      <img
        className='movie-card__img'
        src={Poster || Default}
        alt={`movie poster for ${Title}`}
      />
      <span className='movie-card__year' title={Title}>
        Year: {Year}
      </span>
      <span className='movie-card__type'>Movie Type: {Type}</span>
      <NavLink
        to={`/movie-details/${imdbID}`}
        className='movie-card__details btn-main'
      >
        Details
      </NavLink>
    </div>
  );
}
