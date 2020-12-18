import axios from "axios";
import contactAction from "../redux/contacts/contactAction";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const fetchContacts = () => async (dispatch) => {
  dispatch(contactAction.fetchContactsRequest());
  await axios
    .get("/contacts")
    .then((res) => {
      dispatch(contactAction.fetchContactsSuccess(res.data));
    })
    .catch((error) => dispatch(contactAction.fetchContactsError(error)));
};

const addContact = ({ name, number }) => async (dispatch) => {
  dispatch(contactAction.addContactsRequest());
  await axios
    .post("/contacts", { name, number })
    .then(({ data }) => dispatch(contactAction.addContactsSuccess(data)))
    .catch((error) => dispatch(contactAction.addContactsError(error)));
};

const removeContacts = (id) => async (dispatch) => {
  dispatch(contactAction.removeContactsRequest());
  await axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactAction.removeContactsSuccess(id)))
    .catch((error) => dispatch(contactAction.removeContactsError(error)));
};

export default {
  fetchContacts,
  addContact,
  removeContacts,
};
