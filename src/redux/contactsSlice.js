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
  reducers: {
    fetchIsDone: (state, { payload }) => {
      state.contacts = payload
      state.loading = false
    },
    isLoading:  (state, { payload }) => {
      state.loading = true
    },
    isError:  (state, { payload }) => {
      state.error = payload
      state.loading = false
    },
    addContact: (state, {payload})=> {
      state.contacts.push(payload)
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
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
