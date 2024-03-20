import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {

    const navigate = useNavigate()
    const [inputdata, setInputData] = useState({
        username: "",
        password: ""
    })

    const handelchange = (e) => {
        setInputData({
            ...inputdata, [e.target.name]: e.target.value
        })
    }

    const handelLogin = () => {
        const data = JSON.parse(localStorage.getItem("data"));
        const isExist = data?.find((item) => item?.username === inputdata.username);
        if (isExist && isExist.username === inputdata.username && isExist.password === inputdata.password) {
            alert('Successfully logged in!')
        }

        else {
            alert('invalid username or password')
            navigate('/signup')
        }
    }

    return (
        <>
            <div className='main'>
                <div className='main-box'>

                    <h1>Login</h1><br />
                    <input type='text' placeholder='UserName' name='username' id='fname' onChange={(e) => handelchange(e)} value={inputdata.username} style={{ padding: "5px", width: "85%" }} /><br />
                    <input type='password' placeholder='Password' id='password' name='password' onChange={(e) => handelchange(e)} value={inputdata.password} style={{ padding: "5px", width: "85%" }} /><br />
                    <button className='login' onClick={() => handelLogin()}>Login</button>
                    <p>Dont't Have an account ? <Link to="/signup">SignUp</Link> </p>
                </div>
            </div>
        </>
    )
}
export default Login