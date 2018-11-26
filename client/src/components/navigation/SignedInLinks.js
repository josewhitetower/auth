import React from "react";
import { NavLink } from "react-router-dom";
import { logOut } from "../../store/actions/userActions";
import { connect } from "react-redux";

const SignedInLinks = props => {
  const { firstName, lastName } = props.user;
  const userInitials = firstName[0].toUpperCase() + lastName[0].toUpperCase();
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/profile" className="btn btn-floating red lighten-1">
            {userInitials}
          </NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={props.logOut}>
            Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
