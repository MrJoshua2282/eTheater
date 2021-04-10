import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';
import movieProjector from '../../assets/img/movie.png';

export default function Navbar() {
  return (
    <header className='navbar'>
      <nav className='navbar__list'>
        <NavLink className='navbar__link' to='/'>
          <img
            className='navbar__icon'
            src={movieProjector}
            alt='movie projector'
          />
        </NavLink>
        <NavLink className='navbar__link' to='/'>
          MoviesList
        </NavLink>
        <NavLink className='navbar__link' to='/movie-details/1'>
          MovieDetails
        </NavLink>
      </nav>
    </header>
  );
}
