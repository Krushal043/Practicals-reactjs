import {
  CREATE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  DELETE_SELECTED_CONTACT,
  LIST_USERS
} from "../actions/types";

const initialState = {
  contacts: [
    {
      "id": 1,
      "email": "george.bluth@reqres.in",
      "first_name": "George",
      "last_name": "Bluth",
      "avatar": "https://reqres.in/img/faces/1-image.jpg"
    },
  ],
};

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_USERS:
      return {
        ...state,
        contacts: action.payload,
      };

    case CREATE_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case GET_CONTACT:
      let arr = state.contacts.filter(
        (contact) => contact.id === action.payload
      );
      arr = arr.values();
      for (let val of arr) {
        arr = val;
      }
      return {
        ...state,
        contact: arr,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case DELETE_SELECTED_CONTACT:
      return {
        ...state,
        contacts: [],
      };
    default:
      return state;
  }
};
