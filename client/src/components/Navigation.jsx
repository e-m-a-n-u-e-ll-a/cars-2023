/* eslint-disable no-unused-vars */
import { useContext } from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom'
import AuthContext from '../contexts/AuthContext'
export default function Navigation() {
    //  console.log('Navigation component rendered')
    let { isAuthenticated, email } = useContext(AuthContext)

    return (
        <nav>
            <ul className="nav-list">
                <li><Link to="/">Home</Link></li>
                {isAuthenticated ? (
                    <>
                        <li><Link to="/data/catalog">Catalog</Link></li>
                        <li><Link to="/data/create">Upload a car</Link></li>
                        <li><Link to="/users/logout">Logout</Link></li>
                    </>
                ) : (
                    <>
                        <li><Link to="/data/catalog">Catalog</Link></li>
                        <li><Link to="/users/login">Login</Link></li>
                        <li><Link to="/users/register">Register</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
}
