import {
  CREATE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  DELETE_SELECTED_CONTACT,
  LIST_USERS
} from "./types";

export const listUsers = (contact) => {
  return {
    type: LIST_USERS,
    payload: contact,
  };
};

export const addContact = (contact) => {
  return {
    type: CREATE_CONTACT,
    payload: contact,
  };
};

export const getContact = (id) => {
  return {
    type: GET_CONTACT,
    payload: id,
  };
};

export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact,
});

// delete a contact
export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
})

// delete selected contacts
export const deleteAllContact = () => ({
  type: DELETE_SELECTED_CONTACT,
});