import { createSlice, nanoid } from '@reduxjs/toolkit';

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
    addContact: {
      prepare: (contactName, number) => {
        return {
          payload: {
            id: nanoid(),
            contactName,
            number,
          },
        };
      },
      reducer: (state, action) => {
        const findByName = state.contacts.find(
          contact => contact.contactName === action.payload.contactName
        );
        if (!findByName) {
          state.contacts.push(action.payload);
        } else alert(`${findByName.contactName} is already in contacts`);
      },
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
});

export const { addContact, removeContact, updateFilter, isLoading, isError, fetchIsDone } =
  contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

export const selectContacts = state => state.contacts.contacts;
export const selectIsLoading = state => state.contacts.loading;
export const selectIsError = state => state.contacts.error;
