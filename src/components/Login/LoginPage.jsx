import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import logo_icon from './../../assets/logo-01.png';
import email_icon from './../../assets/email.png';
import password_icon from './../../assets/password.png';
import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const LoginPage = () => {
    const [action, setAction] = useState("Login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        // Dummy credentials
        const dummyEmail = "test@example.com";
        const dummyPassword = "password123";

        if (email === dummyEmail && password === dummyPassword) {
            // Redirect to the new page on successful login
            navigate('/dashboard');
        } else {
            toast.error("Invalid email or password");
        }
    };

    return (
        <div>
        <div className='container'>
            <div className="header">
                <img src={logo_icon} alt="" className='logo'/>
                <div className="text">
                    {action}
                </div>
                <div className="underline"></div>
                <div className="inputs">
                    <div className="input">
                        <img src={email_icon} alt="" />
                        <input
                            type="email"
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input
                            type="password"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                {action === 'Sign Up' ? <div></div> : <div className="forgot-password">Lost Password? <span>Click Here!</span></div> }
                
                <div className="submit-container">
                    <div
                        className={action === 'Sign Up' ? 'submit gray' : 'submit'}
                        onClick={handleLogin}
                    >
                        Login
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer />
        </div>
    );
};

export default LoginPage;
