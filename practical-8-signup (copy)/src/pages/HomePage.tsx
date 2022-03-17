import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../redux/reducers";
import { usersLogout } from "../redux/actions/signupActions";
import { useNavigate } from "react-router-dom";
import "../components/styles/Homepage.css";

const HomePage = () => {
  const user = useSelector((state: State) => state.users);
  console.log(user);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleLogout = () => {
    dispatch(usersLogout());
    navigation("/");
  };

  return (
    <div>
      <div className="home_page">
        <div>
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <div>
          {user.image && <img src={user.image as string} alt="Profile" />}
          <h3>
            <br />
            <span> Name: {user.name}</span>
            <br />
            <span> Email: {user.email}</span>
            <br />
            <span> Phone: {user.phone}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
