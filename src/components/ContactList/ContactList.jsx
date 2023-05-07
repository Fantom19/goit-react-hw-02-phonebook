import css from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = function ({ contacts, handleDeleteContact }) {
  return (
    <ul className={css.listContact}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.itemContact} key={id}>
          <p className={css.contactName}>
            {name}: {number}
          </p>
          <button
            data-id={id}
            onClick={handleDeleteContact}
            className={css.buttonDeleteContact}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  handleDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};

export default ContactList;