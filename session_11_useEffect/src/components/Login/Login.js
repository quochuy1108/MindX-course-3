import React from 'react'

import { useState, useEffect } from 'react'
import './Login.css'

function Login(props) {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isEmailValid, setIsEmailValid] = useState(true)
    const [isPasswordValid, setIsPasswordValid] = useState(true)
    const [isConfirmPasswordValid, setConfirmIsPasswordValid] = useState(true)

    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const onConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value)
    }



    const handleSubmit = (e) => {
        //  Should do an API call
        // For demo: update state
        e.preventDefault();
        props.onSubmit()
    }

    useEffect(() => {
        setIsEmailValid(email.includes('@'))
    }, [email]);

    useEffect(() => {
        setIsPasswordValid(password.trim().length > 6)
    }, [password]);
    useEffect(() => {
        setConfirmIsPasswordValid(password === confirmPassword)
    }, [password, confirmPassword]);

    return (
        <div style={{ height: 2000 }}>
            <form onSubmit={handleSubmit}>
                <div>Login</div>
                {!isEmailValid || !isPasswordValid ? (<div>Please check your input data</div>) : null}
                <div>
                    <label>Email:</label>
                    <input
                        className={isEmailValid ? '' : 'has-error'}
                        type="email"
                        value={email}
                        onChange={onEmailChange}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        className={isPasswordValid ? '' : 'has-error'}
                        type="password"
                        value={password}
                        onChange={onPasswordChange}
                    />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={onConfirmPasswordChange}
                    />
                    {isConfirmPasswordValid ? '' : <div>Password and ConfirmPassword must be match</div>}
                </div>
                <div>
                    <button>Login</button>
                </div>

            </form>
        </div>
    )
}

export default Login
