import React from "react";
import "../../styles/App.scss";

const UserDetails = (props) => {
  const { first_name, last_name, avatar, email} = props.details;
  return (
    <div className="userdetails shadow">
      <div className="userdetail">
        <div className="user_details">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="namedetails">
          <h4>
            {first_name} {last_name}
          </h4>
          <sup></sup>
        </div>

        <p>{email}</p>
        <h3>Your Plan: Standard</h3>
        <button className="btn btn-warning">Active User</button>
      </div>
      <div className="plandetails">
        <h4>Plan Uses</h4>
        <div className="horizontaline">
          <hr className="hr1" />
          <hr className="hr2" />
        </div>
        <div className="clicks">
          <div className="clicksrevieved">
            <h2>2,450</h2>
            <p>clicks reviewed</p>
          </div>
          <div style={{ border: "1px solid gray" }}>
            <p></p>
          </div>
          <div className="clicksrevieved">
            <h2>5,000</h2>
            <p>Monthly clicks</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
