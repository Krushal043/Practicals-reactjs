import { ActionType } from "../actionsTypes/types";
import { Signup } from "./signupTypes";

export const usersSignup = (signup: Signup) => {
  return {
    type: ActionType.SIGNUP_USERS,
    user: signup,
  };
};

export const usersLogout = () => {
  return {
    type: ActionType.LOGOUT_USERS,
  };
};
