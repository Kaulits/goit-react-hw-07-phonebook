
import React, { Component } from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { nanoid } from 'nanoid';
import { StyledWrapper } from './Styled';

export class App extends Component {
 state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
}

    componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts?.length) {
      this.setState({ contacts });
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
}  }
  
 handleAddContact = ({ name, number }) => {
    const { contacts } = this.state;

    const isNameExists = contacts.some(contact => contact.name === name);

    if (isNameExists) {
      alert(`${name} is already in contacts!`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact]
    }));
};


  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  };

  handleFilterChange = filter => {
    this.setState({ filter });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const {  filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <div>
        <StyledWrapper>
           <h1>Phonebook</h1>

        <ContactForm onSubmit={this.handleAddContact} />
    
        
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilterChange} />
          <ContactList contacts={filteredContacts} onDelete={this.handleDeleteContact} />
          </StyledWrapper>
      </div>
    );
  }
}

