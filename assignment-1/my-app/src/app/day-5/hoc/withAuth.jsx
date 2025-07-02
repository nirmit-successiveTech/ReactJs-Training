"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function withAuth(Component) {
  return function Auth(props) {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const router = useRouter();

    const authDetails = (e) => {
      e.preventDefault();
      if (!name || !email) {
        router.push('/day-5');
      } else {
        toast("Logged In successfully");
      }
    };

    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
          padding: "20px",
        }}
      > 
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            
          }}
        >
          <input
            type="text"
            placeholder="Enter the name"
            onChange={(e) => setname(e.target.value)}
            style={{
              padding: "8px",
              fontSize: "14px",
            }}
          />
          <input
            type="text"
            placeholder="Enter the email"
            onChange={(e) => setemail(e.target.value)}
            style={{
              padding: "8px",
              fontSize: "14px",
            }}
          />
          <Component {...props} name={name} email={email} authDetails={authDetails} />
        </div>
      </div>
    );
  };
}
