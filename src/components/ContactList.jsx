import {
  StyledTitle,
  StyledContact,
  StyledContactLi,
  StyledSpan,
  StyledBtnDelete,
} from '../styles/App.Styled';
import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import { deleteContactThunk,  fetchDataThunk } from '../redux/operations';

export const ContactList = () => {
  const { contacts, loading } = useSelector(state => state.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchDataThunk());
  }, [dispatch]);



  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredData = filterContacts();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <StyledContact>
      <StyledTitle>Contacts</StyledTitle>
      <ul>
        {filteredData.map(contact => (
          <StyledContactLi key={contact.id}>
            <StyledSpan>
              {contact.name}: <span>{contact.phone}</span>
            </StyledSpan>
            <StyledBtnDelete
              onClick={() => dispatch(deleteContactThunk(contact.id))}
            >
              delete
            </StyledBtnDelete>
          </StyledContactLi>
        ))}
      </ul>
    </StyledContact>
  );
};
