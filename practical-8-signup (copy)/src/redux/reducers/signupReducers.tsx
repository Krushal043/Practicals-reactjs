import { Signup, Action } from "../actions/signupTypes";
import { ActionType } from "../actionsTypes/types";

export const initialState: Signup = {
  image: null,
  name: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  isLoggedIn: false,
};

export const signupReducer = (state: Signup = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SIGNUP_USERS:
      return {
        ...state,
        ...action.user,
      };

    case ActionType.LOGOUT_USERS:
      return initialState;

    default:
      return state;
  }
};
