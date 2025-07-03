'use client';

import React from 'react';

export default function Modal({ open, setopen, children }) {
  if (!open) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
      }}
    >
     
        <button
          onClick={() => setopen(false)}
          style={{
            position: 'absolute',
            top: '10px',
            right: '15px',
            background: 'none',
            border: 'none',
            fontSize: '20px',
            cursor: 'pointer',
            color:'black'
          }}
        >
          Close
        </button>

        <div>{children}</div>
    </div>
  );
}



