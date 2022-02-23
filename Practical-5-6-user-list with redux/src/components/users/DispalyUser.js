import React from "react";
import "../../styles/App.scss";

const Contact = ({ contact }) => {
  const { first_name, last_name, avatar, email } = contact;

  return (
    <tr>
      <td>
        
      </td>
      <td>
        <div className="avatar">
          <img src={avatar} alt="Avatar" />
          <div className="user_fullname">
            <div>
              {first_name} {last_name}
            </div>
            <div>
              <b> {email}</b>
            </div>
          </div>
        </div>
      </td>
      <td>
        {email === "george.bluth@reqres.in" ? (
          <div className=" btn text-success">Active</div>
        ) : (
          <select className="btn btn-light">
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="busy">Busy</option>
            <option value="away">Away</option>
          </select>
        )}
      </td>
      <td>
        {email === "george.bluth@reqres.in" ? (
          <div className=" btn">Owner</div>
        ) : (
          <select className="btn btn-light">
            <option value="manager">Manger</option>
            <option value="leader">Leader</option>
            <option value="trinee">Trinee</option>
          </select>
        )}
      </td>
      <td>
        {email === "george.bluth@reqres.in" ? (
          <div>
            <span className="material-icons btn-large select">lock</span>
          </div>
        ) : (
          <div>
            <span className="material-icons btn-large select">delete</span>
          </div>
        )}
      </td>
    </tr>
  );
};

export default Contact;
