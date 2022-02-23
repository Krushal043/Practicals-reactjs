import React from "react";
import Users from "../components/users/Users";

export const users = [
  {
    path: "/",
    exact: true,
    component: () => <Users />
  },
];
