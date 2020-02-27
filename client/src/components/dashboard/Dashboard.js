import React from 'react';
import lifecycle from 'react-pure-lifecycle';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getAllUsers } from '../../store/actions/userActions';
import UsersList from '../users/UsersList';
import loginImage from './Login.png';

const componentDidMount = props => {
  //get the users
  if (props.user) {
    props.getAllUsers();
  }
};

// make them properties on a standard object
const methods = {
  componentDidMount,
};
const Dashboard = props => {
  const { user, users, error } = props;
  const dashboard = user ? (
    <UsersList users={users} />
  ) : (
    <div className="center">
      <h4>Welcome, please sing up!</h4>
      <img src={loginImage} alt="A man in front a door" height={400} />
    </div>
  );
  return (
    <div>
      {dashboard}
      <p className="center red-text">{error}</p>
    </div>
  );
};
const mapStateToProps = state => ({
  users: state.users.users,
  user: state.users.user,
  error: state.users.error
});

const mapDispatchToProps = dispatch => ({
  getAllUsers: () => dispatch(getAllUsers())
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  lifecycle(methods)
)(Dashboard);
