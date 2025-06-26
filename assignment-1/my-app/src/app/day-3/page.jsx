'use client';





export default function HomePage() {
  const myname = localStorage.getItem('username')

  return (
    <div>
      <h1>Home Page</h1>
      {myname ? (
        <p>Welcome back, {myname}!</p>
      ) : (
        <p>Please login to access protected pages.</p>
      )}
    </div>
  );
}
