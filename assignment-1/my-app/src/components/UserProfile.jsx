import React from "react";

function UserProfile({ name, email, phone }) {
  return (
    <div>
      <h2>User Profile</h2>
      <p>
        <strong>Name:</strong> <span>{name}</span>
      </p>
      <p>
        <strong>Email:</strong> <span>{email}</span>
      </p>
      <p>
        <strong>Phone:</strong> <span>{phone}</span>
      </p>
    </div>
  );
}

export default UserProfile;
