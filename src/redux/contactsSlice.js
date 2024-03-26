import { createSlice } from '@reduxjs/toolkit';
import { addContactThunk, deleteContactThunk, fetchDataThunk } from './operations';

const initialState = {
  contacts: [],
  filter: '',
  loading: false,
  error: null
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
 
  extraReducers: builder => {
    builder.addCase(fetchDataThunk.pending, state => {
      state.loading = true
      state.error = null
    }).addCase(fetchDataThunk.fulfilled, (state, { payload }) => {
      state.contacts = payload
      state.loading = false
    })
    .addCase(fetchDataThunk.rejected, (state, { payload }) => {
      state.error = payload
      state.loading = false
    })
    .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload)
    })
    .addCase(addContactThunk.fulfilled, (state, { payload }) => {
      state.contacts.push(payload)
    })
  }
});

export const { addContact, removeContact, updateFilter, isLoading, isError, fetchIsDone } =
  contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

export const selectContacts = state => state.contacts.contacts;
export const selectIsLoading = state => state.contacts.loading;
export const selectIsError = state => state.contacts.error;
