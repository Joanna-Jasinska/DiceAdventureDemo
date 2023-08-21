import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Title } from './Title/Title';
import {
  addContact,
  deleteContactById,
  fetchContacts,
} from 'redux/contacts/operations';
import { setFilter } from 'redux/filter/filterSlice';
import { selectContacts } from 'redux/contacts/selectors';
import css from './Phonebook.module.css';
export const Phonebook = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const addContactHandle = (e, newContact) => {
    e.preventDefault();
    const filtered =
      contacts.find(
        c => c.name.toLowerCase() === newContact.name.toLowerCase()
      ) || 0;
    if (filtered !== 0) {
      dispatch(setFilter(filtered.name));
      alert(`You aready have ${filtered.name} in your phonebook.

      ${filtered.name} ${filtered.number}`);
      return;
    }
    const filteredNum =
      contacts.find(
        c => c.number.toLowerCase() === newContact.number.toLowerCase()
      ) || 0;
    if (filteredNum !== 0) {
      dispatch(setFilter(filteredNum.number));
      alert(`You aready have this number in your phonebook.
      
      ${filteredNum.name} ${filteredNum.number}`);
      setNumber(filteredNum.number);
      return;
    }
    dispatch(addContact(newContact));
    setName('');
    setNumber('');
    setFilter('');
  };
  const deleteContactHandle = (e, contact) => {
    e.preventDefault();
    dispatch(deleteContactById(contact.id));
  };
  return (
    <div className={`${css.pphonebook}`}>
      <Title title="Phonebook" />

      <ContactForm
        name={name}
        number={number}
        addContactHandle={addContactHandle}
        setName={setName}
        setNumber={setNumber}
      />

      <Title title="Contacts" />
      <ContactList
        contacts={contacts || []}
        deleteContactHandle={deleteContactHandle}
      />
    </div>
  );
};
