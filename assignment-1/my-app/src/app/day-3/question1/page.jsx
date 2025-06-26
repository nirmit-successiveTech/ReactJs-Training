"use client";
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';
import { useState } from 'react';

export default function LoginPage() {
  const [name, setname] = useState('');
  const [password, setpassword] = useState('');
  const router = useRouter();

  function HandleClick() {
    localStorage.setItem('username', name);
    localStorage.setItem('userpassword', password);
    router.push('/day-3')
  }

  return (
    <div>
      <input onChange={(e) => setname(e.target.value)} placeholder="username" />
      <input onChange={(e) => setpassword(e.target.value)} placeholder="password" />
      <button onClick={HandleClick}>Save</button>
    </div>
  );
}
