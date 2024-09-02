import React, { useState } from 'react'
import './LoginPage.css'
import logo_icon from './../assets/logo-01.png'
import email_icon from './../assets/email.png'
import password_icon from './../assets/password.png'

const LoginPage = () => {

    const [action, setAction] = useState("Login")

  return (
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
                <input type="email" placeholder='Email' />
            </div>

            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Password' />
            </div>
        </div>
        {action === 'Sign Up' ? <div></div> : <div className="forgot-password">Lost Password? <span>Click Here!</span></div> }
        
        <div className="submit-container">
            {/* <div className={action === 'Login' ? 'submit gray' : 'submit'} onClick={() => {setAction('Sign Up')}}>Sign Up</div> */}
            <div className={action === 'Sign Up' ? 'submit gray' : 'submit'} onClick={() => {setAction('Login')}}>Login</div>

        </div>
      </div>
    </div>
  )
}

export default LoginPage