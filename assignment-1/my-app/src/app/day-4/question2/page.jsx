"use client"
import { useState } from "react"

export default function Question2() {
    const [name, setname] = useState('');
    const [surname, setsurname] = useState('');
    const [gender, setgender] = useState('');
    const [age, setage] = useState('');

    const HandleClick = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(surname);
        console.log(gender);
        console.log(age);
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh',paddingTop:'10%' }}>
            <form
                onSubmit={HandleClick}
                style={{
                    display: "flex",
                    flexDirection: 'column',
                    gap: '30px',
                    width: '50%',
                }}
            >
                <input
                    type="text"
                    onChange={(e) => setname(e.target.value)}
                    placeholder="First Name"
                />
                <input
                    type="text"
                    onChange={(e) => setsurname(e.target.value)}
                    placeholder="Last Name"
                />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div>Gender</div>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            onChange={(e) => setgender(e.target.value)}
                        />
                        Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            onChange={(e) => setgender(e.target.value)}
                        />
                        Female
                    </label>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div>18+</div>
                    <label>
                        <input
                            type="checkbox"
                            value="yes"
                            onChange={(e) => setage(e.target.checked ? 'yes' : '')}
                        />
                        Yes
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="no"
                            onChange={(e) => setage(e.target.checked ? 'no' : '')}
                        />
                        No
                    </label>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
