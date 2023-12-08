import { useContext } from 'react';
import './Register.css';
import AuthContext from '../contexts/AuthContext';
import useForm from '../hooks/useFormHook';
export default function Register() {
    let { registerSubmitHandler } = useContext(AuthContext);
    let { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        email: '',
        password: '',
        repeatPassword: ''
    })
    return (
        <div className='registerFormContainer'>

            <form onSubmit={onSubmit}>
                <h2>Register</h2>

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" onChange={onChange} value={values.email} required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" onChange={onChange} value={values.password} required />

                <label htmlFor="repeatPassword">Repeat password:</label>
                <input type="password" id="repeatPassword" name="repeatPassword" onChange={onChange} value={values.repeatPassword} required />

                <button type="submit">Register</button>
            </form>
        </div>
    )
}