/* eslint-disable no-undef */
import { useState } from "react";

export default function useForm(submitHandler, initialValues = {}) {
    // eslint-disable-next-line no-unused-vars
    let [values, setValues] = useState(initialValues);
    let onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }
    let onSubmit = (e) => {
        e.preventDefault();
        submitHandler(values)
    }
    return {
        values,
        onChange,
        onSubmit
    }
}