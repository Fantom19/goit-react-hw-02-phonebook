import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = function ({ searchFilter }) {
  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
       placeholder='Enter a name'
        className={css.filterInput}
        type="text"
        name="filter"
        onChange={e => searchFilter(e.target.value)}
      />
    </label>
  );
};

Filter.propTypes = {
  searchFilter: PropTypes.func.isRequired,
};

export default Filter;