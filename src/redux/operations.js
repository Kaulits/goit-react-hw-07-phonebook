import { fetchIsDone, isError, isLoading } from "./contactsSlice";
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