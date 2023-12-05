/* eslint-disable no-unused-vars */
import './CarDetails.css'
import * as carService from '../services/carService';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Comment from './Comment';
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import * as commentService from '../services/commentService'
export default function CarDetails() {
    let { isAuthenticated, email, _id } = useContext(AuthContext);
    let [car, setCar] = useState({})
    let [comments, setComments] = useState([]);
    let { id } = useParams();



    useEffect(() => {
        carService.getOne(id)
            .then(result => setCar(result));

        commentService.getAll(id)
            .then(setComments);
    }, [id]);



    let addCommentHandler = async (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let text = formData.get('text')
        let comment = await commentService.create({ id, email, text })
        setComments((prevComments) => [...prevComments, comment]);
        e.currentTarget.value = ''
    }
    let isOwner = _id === car._ownerId;


    return (
        <>
            <div className="container">
                <div className="car-details">
                    <img src={car.img} alt="Car 1" className="car-image" />
                    <div className="car-info">
                        <h2>{car.model}</h2>
                        <p>Description: {car.description}</p>
                        <p>Price: {car.price} BGN</p>
                        <p>Mileage: {car.mileage}</p>
                        {isOwner && (<div className='edit-delete-btns'>
                            <button>
                                Edit
                            </button>

                            <button>
                                Delete
                            </button>
                        </div>)}
                    
                        <button>
                            <Link to={'/data/catalog'}>Back </Link>
                        </button>
                    </div>
                </div>

                {isAuthenticated && (
                    <form onSubmit={addCommentHandler} className="comment-form">
                        <label>Add Comment:</label>
                        <textarea name="text"></textarea>
                        <button type="submit">Submit Comment</button>
                    </form>
                )}

                <div className="comments">
                    <h3>Comments:</h3>
                    {comments.length === 0 && (<p>No one commented yet ☺</p>)}

                    {comments.map((c) => (
                        <div key={c._id} className="comment">
                            <Comment email={c.email} text={c.text} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );

}