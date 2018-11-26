import React from 'react';

const UsersList = props => {
  const { users } = props;

  const usersList = users ? (
    users.map(user => {
      return (
        <li className="collection-item avatar" key={user._id}>
          <p>
            <span className="btn btn-floating red lighten-1">
              {user.firstName[0].toUpperCase()}
              {user.lastName[0].toUpperCase()}
            </span>
          </p>
          <p className="title">
            {user.firstName} {user.lastName}
          </p>
          <p className="red-text">{user.email}</p>
        </li>
      );
    })
  ) : (
    <div className="progress">
      <div className="indeterminate" />
    </div>
  );

  return (
    <div className="container">
      <ul className="collection">{usersList}</ul>
    </div>
  );
};

export default UsersList;
