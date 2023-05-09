import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from "./App.module.css"

class App extends Component {
  state = {
    contacts: [ {id: 'id-1', name: 'Go IT', number: '050 366 17 77'},],
    filter: '',
  };

  addNewContact = (name, number) => {
    const newContact = {name, number, id: nanoid()};
    const CheckingContactForSimilarity = this.state.contacts.some(
      contact =>
      contact.name.toLowerCase() === name.toLowerCase() || contact.number === number
    );

    if (CheckingContactForSimilarity) {
      alert(`${name} is already in contacts  
       => ${name} уже есть в контактах <=`);
      return;
    }

    this.setState(({ contacts }) => 
    ({ contacts: [...contacts, newContact] }));
  };

  searchFilter = filter => {
    this.setState({ filter });
  };

  UpdateList = contacts => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().match(this.state.filter.toLowerCase())
    );
  };

  removeContact = id => {
    this.setState(({ contacts }) => {
      return { contacts: contacts.filter(contact => contact.id !== id) };
    });
  };

  render() {
    const { contacts } = this.state;
    const filterContacts = this.UpdateList(contacts);
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: '50px',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <h1 className={css.titel}>Phonebook</h1>
        <ContactForm  addNewContact={this.addNewContact} />
        <h2 className={css.titel}>Contacts</h2>
        <Filter searchFilter={this.searchFilter} />
        <ContactList 
           contacts={filterContacts}
           removeContact={this.removeContact}
        />
      </div>
    );
  }
}

export default App;