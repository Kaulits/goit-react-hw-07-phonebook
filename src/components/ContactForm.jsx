import React, { useState } from 'react';

import {
  StyledForm,
  StyledTitle,
  StyledDesc,
  StyledBtn,
} from '../styles/App.Styled';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsSlice';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact(name, number));
    setName('');
    setNumber('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledTitle>Phonebook</StyledTitle>
      <StyledDesc>Name</StyledDesc>
      <input
        type="text"
        name="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Name"
      />
      <StyledDesc>Phone number</StyledDesc>
      <input
        type="tel"
        name="number"
      
        required
        value={number}
        onChange={e => setNumber(e.target.value)}
        placeholder="XXX-XXX-XXXX"
      />

      <StyledBtn type="submit">Add Contact</StyledBtn>
    </StyledForm>
  );
};

export default ContactForm;