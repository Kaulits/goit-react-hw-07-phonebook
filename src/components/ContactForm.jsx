import React, { useState } from 'react';

import {
  StyledForm,
  StyledTitle,
  StyledDesc,
  StyledBtn,
} from '../styles/App.Styled';
import { useDispatch } from 'react-redux';

import { addContactThunk } from '../redux/operations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContactThunk({name, phone, createdAt: new Date().toLocaleTimeString()}));
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
        name="phone"
      
        required
        value={phone}
        onChange={e => setNumber(e.target.value)}
        placeholder="XXX-XXX-XXXX"
      />

      <StyledBtn type="submit">Add Contact</StyledBtn>
    </StyledForm>
  );
};

export default ContactForm;