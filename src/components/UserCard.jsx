import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './TodoList';

const UserCard = ({ user }) => {
  const [todos, setTodos] = useState([]);

  const handleClick = () => {
    axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${user.id}`)
      .then(response => setTodos(response.data))
      .catch(error => console.error(error));
  }

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <button onClick={handleClick}>Show Todos</button>
      {todos.length > 0 && <TodoList todos={todos.slice(0, 5)} />}
    </div>
  );
}

export default UserCard;
