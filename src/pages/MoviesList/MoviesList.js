import React, { useState, useEffect } from 'react';

import './MoviesList.scss';
import MovieCard from '../../components/MovieCard/MovieCard';
import useLocalStorage from '../../useHooks/useLocalStorage';

export default function MoviesList() {
  // COMMENT: Usually you put sensitive info like 'keys' in the env
  const key = 'a7931d23';

  const [movies, setMovies] = useState([]);
  const [storedMovies, setStoredMovies] = useLocalStorage('movies', movies);
  const [form, setForm] = useState({ title: '', type: '', year: '' });

  useEffect(() => {
    if (storedMovies.length) {
      setMovies(storedMovies);
    }
    console.log(storedMovies);
  }, []);

  const submitFormHandler = async (e) => {
    e.preventDefault();

    try {
      let { title, type, year } = form;

      if (!title) return;
      if (type) {
        type = `&type=${type}`;
      } else {
        title = '';
      }
      if (year && Number.isInteger(+year)) {
        year = `&y=${year}`;
      } else {
        year = '';
      }

      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${key}&s=${title}${type}${year}`
      );
      const { Search } = await res.json();
      if (Search.length) {
        setMovies(Search);
        setStoredMovies(Search);
      }
      console.log(movies.Search);
      console.log('Form Submitted');
    } catch (error) {
      console.log(error);
      // add error handling / modal
    }
  };

  const clearForm = () => {
    setForm({ title: '', type: '', year: '' });
  };

  const updateFormHandler = (e) => {
    const { value, id } = e.target;
    const copyForm = { ...form };
    copyForm[id] = value;
    setForm(copyForm);
  };

  const clearLocalStorage = () => {
    setStoredMovies([]);
  };

  return (
    <div>
      <form className='form' onSubmit={submitFormHandler}>
        <label className='form__label form__label--title' htmlFor='title'>
          Title:
          <input
            id='title'
            type='text'
            className='form__title'
            value={form['title']}
            onChange={updateFormHandler}
          />
        </label>

        <label className='form__label form__label--type' htmlFor='type'>
          Type:
          <select id='type' value={form['type']} onChange={updateFormHandler}>
            <option defaultValue value='' />
            <option value='movie'>Movie</option>
            <option value='series'>Series</option>
            <option value='episode'>Episode</option>
          </select>
        </label>

        <label className='form__label form__label--year' htmlFor='year'>
          Year:
          <input
            id='year'
            type='text'
            className='form__year'
            value={form['year']}
            onChange={updateFormHandler}
          />
        </label>

        <button type='submit' className='form__submit'>
          Search
        </button>
        <button onClick={clearForm}>Clear</button>
        <button onClick={clearLocalStorage}>Clear Local Storage</button>
      </form>
      <section className='movie-container'>
        {movies.length
          ? movies.map((el, i) => {
              return <MovieCard key={i} movie={el} />;
            })
          : null}
      </section>
    </div>
  );
}
