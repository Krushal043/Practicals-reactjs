import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { State } from "../redux/reducers";

interface PropType {
  component: React.FC;
}

const Auth: FC<PropType> = ({ component: Component }) => {
  const user = useSelector((state: State) => state.users);
  if (user.isLoggedIn) {
    return <Component />;
  } else {
    return <Navigate to="/" />;
  }
};

export default  Auth;
