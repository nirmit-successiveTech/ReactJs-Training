"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function FetchLoadingComponent() {
  const [datavalue, setdatavalue] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);

  const fetchData = async () => {
    setloading(true);
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setdatavalue(response.data);
      seterror(false);
    } catch (error) {
      seterror(true);
      console.error("Fetch error:", error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f8d7da',
        color: '#721c24',
      }}>
        <p>Something went wrong while fetching data.</p>
        <button
          onClick={fetchData}
          style={{
            padding: '10px 20px',
            backgroundColor: '#dc3545',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '1rem'
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '1.5rem',
        backgroundColor: '#e9ecef',
        color: '#495057',
      }}>
        Loading...
      </div>
    );
  }

  return (
    <div style={{
      backgroundColor: '#f1f3f5',
      minHeight: '100vh',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h2 style={{ marginBottom: '2rem', color: '#212529' }}>User List</h2>
      {datavalue.map((item) => (
        <div
          key={item.id}
          style={{
            backgroundColor: '#fff',
            padding: '1rem',
            marginBottom: '1rem',
            width: '320px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}
        >
          <p><strong>Name:</strong> {item.name}</p>
          <p><strong>Email:</strong> {item.email}</p>
          <p><strong>Phone:</strong> {item.phone}</p>
          <p><strong>Company:</strong> {item.company?.name}</p>
        </div>
      ))}
    </div>
  );
}
