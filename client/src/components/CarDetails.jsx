/* eslint-disable no-unused-vars */
import './CarDetails.css'
import * as gameService from '../services/carService';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function CarDetails() {
    let [car, setCar] = useState({})
    let { id } = useParams();
    useEffect(() => {
        gameService.getOne(id)
            .then(result => setCar(result));
    }, [id]);
    return (
        <>
        <div className='container'>

            <div className="car-details">
                <img src={car.img} alt="Car 1" />
                <h2>{car.model}</h2>
                <p>Description: {car.description}</p>
                <p>Price: {car.price} BGN</p>
                <p>Mileage: {car.mileage}</p>
                <button><Link to={'/data/catalog'}>Back </Link></button>
            </div>
           
      


            <form>
                <label>Add Comment:</label>
                <textarea></textarea>
                <button type="submit">Submit Comment</button>
            </form>
        

    

         <div className="comments">
         <h3>Comments:</h3>
         <ul>

             <li>cena</li>
             <li>cena?</li>
             <li>Cena</li>
             <li>цена</li>

         </ul>
     </div>



        </div>
        </>
    )
}