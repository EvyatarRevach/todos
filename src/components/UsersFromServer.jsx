import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './UserCard';

const UsersFromServer = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UsersFromServer;
