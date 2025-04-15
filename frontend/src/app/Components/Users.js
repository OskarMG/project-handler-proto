'use client';

// Users.js testing purpose only to see whether ReactQuery is working or not
import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const fetchUsers = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
  return data;
};

const Users = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.email}</li>
      ))}
    </ul>
  );
};

export default Users;
