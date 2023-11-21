import { useForm } from '../hooks/useFormHook'
import './Login.css';

export default function Login() {
    let { values, onChange, onSubmit } = useForm({
        email: '',
        password: ''
    })
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" onChange={onChange} value={values.password} required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" onChange={onChange} value={values.password} required />

                <button type="submit">Login</button>
            </form>
        </div>
    )
}