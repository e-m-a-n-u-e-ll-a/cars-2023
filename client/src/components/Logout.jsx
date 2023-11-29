import { useContext, useEffect } from "react";
import * as authService from '../services/authService';
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
export default function Logout() {
    let navigate = useNavigate();
    let { logoutHandler } = useContext(AuthContext);
    useEffect(() => {
        authService.logout()
            .then(() => logoutHandler())
            .catch(() => navigate('/'))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return null
}