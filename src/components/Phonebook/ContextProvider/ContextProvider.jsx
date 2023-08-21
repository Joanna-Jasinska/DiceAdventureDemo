import { createContext, useContext, useState } from 'react';
import { PropTypes } from 'prop-types';

const PhonebookContext = createContext();
export const usePhonebook = () => useContext(PhonebookContext);

export const PhonebookProvider = props => {
  const [name, setName] = useState(props.name);
  const [number, setNumber] = useState(props.number);
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || props.contacts
  );
  const [filter, setFilter] = useState(props.filter);
  const contextValue = {
    name,
    setName,
    number,
    setNumber,
    contacts,
    setContacts,
    filter,
    setFilter,
  };
  return (
    <PhonebookContext.Provider value={contextValue}>
      {props.children}
    </PhonebookContext.Provider>
  );
};

PhonebookProvider.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  name: PropTypes.string,
  number: PropTypes.string,
  filter: PropTypes.string,
};
