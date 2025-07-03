'use client';

import React, { useState } from 'react';

export default function UsersList({ initialUsers, hasError }) {
  const [users, setUsers] = useState(initialUsers || []);
  const [error, setError] = useState(hasError);
  const [loading, setLoading] = useState(false);

  const retryFetch = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!res.ok) throw new Error('Failed again');
      const data = await res.json();
      setUsers(data);
      setError(false);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return (
      <div style={styles.center}>
        <p style={{ color: 'red' }}>Failed to load users. Please try again.</p>
        <button onClick={retryFetch} style={styles.button} disabled={loading}>
          {loading ? 'Retrying...' : 'Retry'}
        </button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2>Users List</h2>
      {users.map((user) => (
        <div key={user.id} style={styles.card}>
          <p><strong>{user.name}</strong></p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#f5f5f5',
    minHeight: '100vh',
  },
  card: {
    background: 'white',
    padding: '1rem',
    marginBottom: '1rem',
    borderRadius: '8px',
    width: '300px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  },
  center: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '2rem',
  },
  button: {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    background: '#0070f3',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
