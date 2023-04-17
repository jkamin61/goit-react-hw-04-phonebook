import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export const App = ()=>  {

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('Contacts');
    const parsedContacts = JSON.parse(contacts);
    if (Array.isArray(parsedContacts)) {
      setContacts(parsedContacts);
    }
    localStorage.setItem('Contacts', JSON.stringify(parsedContacts));
  }, []);

  const handleAddContact = (name, number) => {
    const duplicateName = contacts.find(contact => contact.name === name);
    const duplicateNumber = contacts.find(contact => contact.number === number);

    if (duplicateName || duplicateNumber) {
      alert(`${name} is already in your contacts`);
    } else {
      const newContact = { id: nanoid(), name, number };
      setContacts([...contacts, newContact])
    }
  };

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const handleDeleteContact = id => {
  setContacts(contacts.filter(contact => contact.id !== id));
  };

  const filterContacts = (contacts, filter) =>
     contacts.filter(contact =>
      typeof contact.name === 'string' && contact.name.toLowerCase().includes(filter.toLowerCase().trim()),
    );

  const filteredContacts = filterContacts(contacts, filter);

  return (
    <div>
      <h1 className={'heading'}>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <h2 className={'heading'}>Contacts</h2>
      <div className={'list'}>
        <Filter filter={filter} onChange={handleFilterChange} />
        <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
      </div>
    </div>
  );

}


