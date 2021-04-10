import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';

import './MovieDetails.scss';
import Default from '../../assets/img/default_poster.jpg';

export default function MovieDetails() {
  // FYI: I usually keep 'keys' in env
  const key = 'a7931d23';

  const { id } = useParams();
  const [movie, setMovie] = useState('');
  const { Title, Year, Rated, Type, Released, Genre, Ratings, Poster } = movie;

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${key}&i=${id}`
        );
        const movieData = await res.json();
        setMovie(movieData);
        console.log(movieData);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);
  return (
    <div className='single-movie__container'>
      {movie ? (
        <section className='single-movie'>
          <img
            src={Poster || Default}
            alt={`${Title}`}
            className='single-movie__img'
          />
          <section className='single-movie__details'>
            <title className='single-movie__title'>Title: {Title}</title>
            <span className='single-movie__year'>Year: {Year}</span>
            <span className='single-movie__rated'>Rated: {Rated}</span>
            <span className='single-movie__type'>Movie Type: {Type}</span>
            <span className='single-movie__released'>Released: {Released}</span>
            <span className='single-movie__genre'>Genre: {Genre}</span>
            {/* <span className='single-movie__ratings'>{Ratings}</span> */}
          </section>
        </section>
      ) : null}
      <NavLink to='/'>Back</NavLink>
    </div>
  );
}
