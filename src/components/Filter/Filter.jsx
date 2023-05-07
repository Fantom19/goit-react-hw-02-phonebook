import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = function ({ handleFilterChange }) {
  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
       placeholder='Enter a name'
        className={css.filterInput}
        type="text"
        name="filter"
        onChange={handleFilterChange}
      />
    </label>
  );
};

Filter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default Filter;