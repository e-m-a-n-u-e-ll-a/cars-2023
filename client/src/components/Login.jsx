/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import useForm from '../hooks/useFormHook'
import './Login.css';
import AuthContext from '../contexts/AuthContext';

export default function Login() {
    let { loginSubmitHandler } = useContext(AuthContext)
    let { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        email: '',
        password: ''
    })
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" onChange={onChange} value={values.email} required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" onChange={onChange} value={values.password} required />

                <button type="submit">Login</button>
            </form>
        </div>
    )
}