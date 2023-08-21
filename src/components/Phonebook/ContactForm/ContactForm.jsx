import React from 'react';
import css from './../Phonebook.module.css';
import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';
// { name, number, addContactHandle, setName, setNumber }
export const ContactForm = ({
  name,
  number,
  addContactHandle,
  setName,
  setNumber,
}) => {
  return (
    <div className={css.card}>
      <form
        className={css.form}
        onSubmit={e =>
          addContactHandle(e, {
            name: name,
            number: number,
          })
        }
      >
        <label className={css.label} htmlFor="name">
          Name
        </label>
        <input
          className={css.input}
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label className={css.label} htmlFor="number">
          Number
        </label>
        <input
          className={css.input}
          type="tel"
          id="number"
          name="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={`${css.add} ${css.button}`} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  addContactHandle: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  setNumber: PropTypes.func.isRequired,
};
