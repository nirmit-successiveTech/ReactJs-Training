"use client"
import { useEffect, useState } from "react"
import { toast } from "react-toastify";

export default function Question4() {

  const [flag, setflag] = useState(true);
  const [password, setpassword] = useState('');
  const [newpassword, setnewpassword] = useState(null);

  const HandleClick = (e) => {
    console.log('calling')
    e.preventDefault();  // prevent page reload on submit
    toast("form submitted");
  }

  useEffect(() => {
    if (flag) {
      if (password === newpassword) {
        console.log("hehe");
        setflag(false)
        console.log(flag);
      }
      
    }
  }, [newpassword])

  console.log(flag);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',   
        alignItems: 'center',        
        height: '100vh',             
        flexDirection: 'column',    
      }}
    >
      <form>
        <input type="text" placeholder="Enter g-mail account" style={{ display: 'block', marginBottom: 12 }} />
        <input type="password" placeholder="Enter password" onChange={(e) => setpassword(e.target.value)} style={{ display: 'block', marginBottom: 12 }} />
        <input type="password" placeholder="Re-enter the password" onChange={(e) => setnewpassword(e.target.value)} style={{ display: 'block', marginBottom: 12 }} />
        <button onClick={HandleClick} disabled={flag} style={{ display: 'block' }}>Submit</button>
      </form>
    </div>
  )
}
