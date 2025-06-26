"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function About() {
  // const [username, setUsername] = useState(null);
  // const [userpassword, setUserPassword] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    console.log(storedUsername)
    const storedPassword = localStorage.getItem('userpassword');
    if(storedUsername!=='nirmit' && storedPassword!=123){
      router.push('/day-3/login');
    }
  }, []);

  

  return (
    <div>
     About Page
    </div>
  );
}
