import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './search.module.css'
const MoviesSearchForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    query: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ ...state });
    setState({ query: '' });
  };

  return (
    <>
      <form action="" className={s.search} onSubmit={handleSubmit}>
        <input
          value={state.query}
          name="query"
          onChange={handleChange}
          type="text"
          placeholder="Movie"
          className={s.input}
        />
        <button className={s.button}>Search</button>
      </form>
    </>
  );
};

export default MoviesSearchForm;

MoviesSearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};