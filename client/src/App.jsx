/* eslint-disable no-unused-vars */
import Footer from "./components/Footer"
import Navigation from "./components/Navigation"
import Home from './components/Home'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Catalog from './components/Catalog'
import About from "./components/About"
import CarCreate from "./components/CarCreate"
import CarDetails from "./components/CarDetails"
import Login from "./components/Login"
import { useState } from "react"
import AuthContext from "./contexts/AuthContext"
import * as authService from './services/authService'
import Register from "./components/Register"
import Logout from "./components/Logout"

function App() {
    let navigate = useNavigate();
    let [auth, setAuth] = useState(() => {
        localStorage.removeItem('accessToken');
        navigate('/')
        return {}
    });

    let loginSubmitHandler = async (values) => {
        try {
            let result = await authService.login(values.email, values.password);
            setAuth(result);
            localStorage.setItem('accessToken', result.accessToken)
            console.log(localStorage.setItem('accessToken', result.accessToken))
            navigate('/data/catalog');
            console.log(result);
        } catch (error) {
            console.error("Login failed:", error);

        }
    }
    let registerSubmitHandler = async (values) => {
        let result = await authService.register(values.email, values.password);
        console.log(values);
        setAuth(result); localStorage.setItem('accessToken', result.accessToken)
        console.log(result)
        navigate('/data/catalog')
    }

    let logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');

    }
    let values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        email: auth.email,
        isAuthenticated: !!auth.email,

    }

    return (
        <>
            <AuthContext.Provider value={values}>

                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users/login" element={<Login />} />
                    <Route path="/users/register" element={<Register />} />
                    <Route path="/users/logout" element={<Logout />} />
                    <Route path="/data/catalog" element={<Catalog />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/data/create" element={<CarCreate />}></Route>
                    <Route path="/data/catalog/:id" element={<CarDetails />}></Route>

                </Routes>
                <Footer />
            </AuthContext.Provider>
        </>
    )
}

export default App
