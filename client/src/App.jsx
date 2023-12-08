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
import EditCar from "./components/EditCar"
import NotFound from "./components/404"
import IsAuth from "./components/IsAuth"
import MyPosts from "./components/MyPosts"

function App() {
    let navigate = useNavigate();
    let [auth, setAuth] = useState(() => {
        localStorage.removeItem('accessToken');

        return {}
    });

    let loginSubmitHandler = async (values) => {
        try {
            let result = await authService.login(values.email, values.password);
            // console.log(result);
            setAuth(result);
            localStorage.setItem('accessToken', result.accessToken)
            // console.log(localStorage.setItem('accessToken', result.accessToken))
            navigate('/data/catalog');
            // console.log(result.accessToken);
        } catch (error) {
            console.error("Login failed:", error);

        }
    }
    let registerSubmitHandler = async (values) => {
        let result = await authService.register(values.email, values.password);
        console.log(values);
        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken.token)
        console.log(result)
        navigate('/data/catalog')
    }

    let logoutHandler = () => {
        setAuth({});
        navigate('/')
        localStorage.removeItem('accessToken');

    }
    let values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        email: auth.email,
        _id: auth._id,
        posts: auth.posts || [],
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
                    <Route path="/data/create" element={<IsAuth><CarCreate /></IsAuth>}></Route>
                    <Route path="/data/catalog/:id" element={<CarDetails />}></Route>
                    <Route path="/data/catalog/:id/edit" element={<IsAuth> <EditCar /></IsAuth>}></Route>
                    <Route path="/users/:id/myposts" element={<IsAuth><MyPosts /></IsAuth>}></Route>
                    <Route path="*" element={<NotFound />}></Route>

                </Routes>
                <Footer />
            </AuthContext.Provider>
        </>
    )
}

export default App
