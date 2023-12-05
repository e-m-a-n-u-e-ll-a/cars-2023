import './CarCreate.css';
import * as carService from '../services/carService'
import { useNavigate } from 'react-router-dom'
export default function CarCreate() {
    let navigate = useNavigate()
    async function createCarHandler(e) {
        e.preventDefault();
        let carData = Object.fromEntries(new FormData(e.currentTarget));
       // console.log(carData);
        try {
            await carService.create(carData);
           
            navigate('/data/catalog');

        } catch (err) {
            console.log('Error: ', err);
        }
    }
    return (
        <section>
            <div className="form-container">
                <div className="image-container">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_Wwtedp-CqmUm_WWN4ez0QiHF3Tp8ZrJo7qzGlNUlS9HW8JKDOvmsf-Hrxn3rvopnok&usqp=CAU" alt="Car Image" />
                </div>
                <form className='createform' onSubmit={createCarHandler}>
                    <label htmlFor="model">Car Model:</label>
                    <input type="text" id="model" name="model" required />

                    <label htmlFor="img">Image URL:</label>
                    <input type="text" id="img" name="img" required />

                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" rows="4" required></textarea>

                    <label htmlFor="price">Price:</label>
                    <input type="number" id="price" name="price" required />

                    <label htmlFor="year">Year:</label>
                    <input type="number" id="year" name="year" required />

                    <label htmlFor="mileage">Mileage:</label>
                    <input type="number" id="mileage" name="mileage" required />

                    <button type="submit">Add Car</button>
                </form>
            </div>
        </section>

    )
}