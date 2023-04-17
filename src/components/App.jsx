import React from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('Contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  handleAddContact = (name, number) => {
    const { contacts } = this.state;
    const duplicateName = contacts.find(contact => contact.name === name);
    const duplicateNumber = contacts.find(contact => contact.number === number);

    if (duplicateName || duplicateNumber) {
      alert(`${name} is already in your contacts`);
    } else {
      const newContact = { id: nanoid(), name, number };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    localStorage.setItem('Contacts', JSON.stringify(this.state.contacts));
  }

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filterContacts = (contacts, filter) =>
    contacts.filter(contact =>
      typeof contact.name === 'string' && contact.name.toLowerCase().includes(filter.toLowerCase().trim()),
    );

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.filterContacts(contacts, filter);

    return (
      <div>
        <h1 className={'heading'}>Phonebook</h1>
        <ContactForm onAddContact={this.handleAddContact} />
        <h2 className={'heading'}>Contacts</h2>
        <div className={'list'}>
          <Filter filter={this.state.filter} onChange={this.handleFilterChange} />
          <ContactList contacts={filteredContacts} onDeleteContact={this.handleDeleteContact} />
        </div>
      </div>
    );
  }
}


