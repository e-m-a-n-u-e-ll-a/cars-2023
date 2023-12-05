/* eslint-disable no-unused-vars */
import './CarDetails.css'
import * as gameService from '../services/carService';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Comment from './Comment';
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import * as commentService from '../services/commentService'
export default function CarDetails() {
    let { isAuthenticated, email } = useContext(AuthContext);
    let [car, setCar] = useState({})
    let { id } = useParams();



    useEffect(() => {
        gameService.getOne(id)
            .then(result => setCar(result));
    }, [id]);


    let [comments, setComments] = useState({});

    let addCommentHandler = async (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let text = formData.get('text')
        let comment = await commentService.create({ id, email, text })
        console.log(comment);
    }

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

                {isAuthenticated && (<form onSubmit={addCommentHandler}>
                    <label>Add Comment:</label>
                    <textarea name='text'></textarea>
                    <button type="submit">Submit Comment</button>
                </form>)}

                <div className="comments">
                    <h3>Comments:</h3>
                    <ul>

                        <Comment />

                    </ul>
                </div>



            </div>
        </>
    )
}