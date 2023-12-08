/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from '../contexts/AuthContext';
export default function IsAuth(props) {

    let { isAuthenticated } = useContext(AuthContext);
    if (!isAuthenticated) {
        return <Navigate to={'/users/login'} />
    }
    return (
        <>
            {props.children}
        </>
    )
}