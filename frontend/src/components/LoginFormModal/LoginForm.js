import React, { useState } from "react";
import * as sessionActions from '../../store/session';
import { useDispatch } from "react-redux";
import './LoginForm.css'

function LoginForm() {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password })).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );
    };

    return (
        <div className="login_form">
            <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                ))}
            </ul>
            <div className="username_or_email">
                <i className="fa-solid fa-envelope" />
                <input 
                    type='text'
                    value={credential}
                    onChange={(e) => setCredential(e.target.value)}
                    placeholder="Username or Email"
                    required
                />
            </div>
            <div className="password">
                <i className="fa-solid fa-key" />
                <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Password"
                />
            </div>
            <button id="login_button" type="submit">Log In</button>
        </form>
        </div>
    );
}

export default LoginForm;