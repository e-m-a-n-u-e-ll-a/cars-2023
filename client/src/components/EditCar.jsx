/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import * as carService from '../services/carService'

export default function EditCar() {
    let navigate = useNavigate()
    let { id } = useParams();
    let [car, setCar] = useState({});
    let [values, setValues] = useState({
        model: '',
        img: '',
        description: '',
        price: 0,
        year: 0,
        mileage: 0,
    });

    useEffect(() => {
        carService.getOne(id)
            .then(result => {
                setCar(result);
                setValues(result)
            })

    }, [id]);


    let onSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        console.log(formData)
        setValues(state => ({ ...state, formData }))
        await carService.editCar(id, values);
        navigate(`/data/catalog/${id}`)

    }
    let onChange = (e) => {
        setValues(oldS => ({
            ...oldS,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <section>
            <div className="form-container">
                <div className="image-container">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_Wwtedp-CqmUm_WWN4ez0QiHF3Tp8ZrJo7qzGlNUlS9HW8JKDOvmsf-Hrxn3rvopnok&usqp=CAU" alt="Car Image" />
                </div>
                <form className='createform' onSubmit={onSubmit} >
                    <label htmlFor="model">Car Model:</label>
                    <input type="text" id="model" name="model" onChange={onChange} value={values.model} required />

                    <label htmlFor="img">Image URL:</label>
                    <input type="text" id="img" name="img" onChange={onChange} value={values.img} required />

                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" rows="4" onChange={onChange} value={values.description} required></textarea>

                    <label htmlFor="price">Price:</label>
                    <input type="number" id="price" name="price" onChange={onChange} value={values.price} required />

                    <label htmlFor="year">Year:</label>
                    <input type="number" id="year" name="year" onChange={onChange} value={values.year} required />

                    <label htmlFor="mileage">Mileage:</label>
                    <input type="number" id="mileage" name="mileage" onChange={onChange} value={values.mileage} required />

                    <button type="submit">Edit post</button>
                </form>
            </div>
        </section>
    )
}