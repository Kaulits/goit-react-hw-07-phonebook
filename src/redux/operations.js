import { addContact, fetchIsDone, isError, isLoading, removeContact } from "./contactsSlice";
import axios from "axios";


axios.defaults.baseURL = 'https://6601ccd99d7276a75552310e.mockapi.io/'

export const fetchData = () => async dispatch => {
try {
    dispatch(isLoading())
    const {data} = await axios.get('/contacts')
    dispatch(fetchIsDone(data))
} catch (error) {
    dispatch(isError(error.message))
}
}

export const deleteContactThunk = id => async dispatch => {
    try {
        await axios.delete(`contacts/${id}`)
     
        dispatch(removeContact(id))
    } catch (error) {
        dispatch(isError(error.message))
    }
}
export const addContactThunk = body => async dispatch => {
    try {
       const {data} = await axios.post(`/contacts`, body)
     
        dispatch(addContact(data))
    } catch (error) {
        dispatch(isError(error.message))
    }
}