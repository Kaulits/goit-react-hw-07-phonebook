import React from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import { ContactList } from './ContactList';
import { useSelector } from 'react-redux';
import { selectIsError, selectIsLoading } from '../redux/contactsSlice';

const App = () => {
  
    const error = useSelector(selectIsError)
    const loading = useSelector(selectIsLoading)
  return (
    <div>
      <ContactForm />
      <Filter />
      {loading && <h1>LOADING</h1>}
     {!error ?  <ContactList /> : <h1>OPS</h1>}
    </div>
  );
};

export default App;