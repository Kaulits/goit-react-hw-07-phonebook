import React, { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { nanoid } from 'nanoid';
import { StyledWrapper } from './Styled';

export const App = () => {
//  state = {
//   contacts: [
//     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//   ],
//   filter: '',
// }

    const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');
  

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storedContacts) {
      setContacts(storedContacts);
    }
  }, []);

  
  //   componentDidMount() {
  //   const contacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (contacts?.length) {
  //     this.setState({ contacts });
  //   }
  // }
  
 useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//     localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
// }  }
  
 const handleAddContact = ({ name, number }) => {
    // const { contacts } = this.state;

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

    // this.setState(prevState => ({
    //   contacts: [...prevState.contacts, newContact]
   // }));
    setContacts(prevContacts => [...prevContacts, newContact]);
};


  const handleDeleteContact = id => {
    // this.setState(prevState => ({
    //   contacts: prevState.contacts.filter(contact => contact.id !== id)
    // }));
     setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };

  const handleFilterChange = filter => {
    // this.setState({ filter });
    setFilter(filter);
  };

 const getFilteredContacts = () => {
    // const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

 const filteredContacts = getFilteredContacts();

  // render() {
  //   const {  filter } = this.state;
  //   const filteredContacts = this.getFilteredContacts();

    return (
      <div>
        <StyledWrapper>
           <h1>Phonebook</h1>

        <ContactForm onSubmit={handleAddContact} />
    
        
        <h2>Contacts</h2>
        <Filter value={filter} onChange={handleFilterChange} />
          <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
          </StyledWrapper>
      </div>
    );
  }

