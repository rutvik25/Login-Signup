import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Signup() {
const navigate = useNavigate()
    const [records, setRecords] = useState(JSON.parse(localStorage.getItem("data")) || []);

    const [inputdata, setInputData] = useState({
        fname: "",
        username: "",
        email: "",
        number: "",
        password: ""
    })

    const handelchange = (e) => {
        setInputData({
            ...inputdata, [e.target.name]: e.target.value
        })
    }

    const handleSignup = () => {
        setRecords([...records, inputdata])
        localStorage.setItem('data', JSON.stringify([...records, inputdata]));

        alert('User Added Successfully');
        navigate('/login')
    }

    return (
        <div className='main1'>
            <div className='main-box1'>
                <h1>SignUp</h1><br />
                <input type='text' placeholder='FirstName' name='fname' id='fname' style={{ padding: "5px", width: "85%" }} onChange={(e) => handelchange(e)} value={inputdata.fname} /><br />
                <input type='text' placeholder='UserName' name='username' id='username' style={{ padding: "5px", width: "85%" }} onChange={(e) => handelchange(e)} value={inputdata.username} /><br />
                <input type='email' placeholder='email' name='email' id='email' style={{ padding: "5px", width: "85%" }} onChange={(e) => handelchange(e)} value={inputdata.email} /><br />
                <input type='tel' placeholder='Mobile Number' name='number' id='number' style={{ padding: "5px", width: "85%" }} onChange={(e) => handelchange(e)} value={inputdata.number} /><br />
                <input type='password' placeholder='Password' name='password' id='password' style={{ padding: "5px", width: "85%" }} onChange={(e) => handelchange(e)} value={inputdata.password} /><br />
                <button className='signup' onClick={() => handleSignup()}>Create Account</button>
                <p>Back to <Link to="/login">Login</Link></p>
            </div>
        </div>
    )
}

export default Signup