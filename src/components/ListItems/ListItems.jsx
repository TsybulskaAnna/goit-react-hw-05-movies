import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './link.module.css';

const ListItems = ({ movies }) => {
  const location = useLocation();
  const elements = movies.map(({ id, title, original_name }) => (
    <li key={id} className={s.link}>
      {title && (
        <Link state={{ from: location }} to={`/movies/${id}`}>
          {title}
        </Link>
      )}
      {!title && (
        <Link state={{ from: location }} to={`/movies/${id}`}>
          {original_name}
        </Link>
      )}
    </li>
  ));
  return <>{Boolean(movies.length) && <ul>{elements}</ul>}</>;
};

export default ListItems;

ListItems.dafaultProps = {
  movies: [],
};

ListItems.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      original_name: PropTypes.string,
    })
  ),
};
