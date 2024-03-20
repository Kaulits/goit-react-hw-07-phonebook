
import React from 'react';
import { StyledContactItem } from './Styled';

export const ContactItem = ({ contact, onDelete }) => (
  <StyledContactItem>
    <span>{contact.name}: {contact.number}</span>
    <button onClick={() => onDelete(contact.id)}>Delete</button>
  </StyledContactItem>
);
 
