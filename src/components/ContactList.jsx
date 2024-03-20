
import React from 'react';
import { ContactItem } from './ContactItem';
import { StyledContactList } from './Styled';

export const ContactList = ({ contacts, onDelete }) => (
  <StyledContactList>
    {contacts.map(contact => (
      <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
    ))}
  </StyledContactList>
);

