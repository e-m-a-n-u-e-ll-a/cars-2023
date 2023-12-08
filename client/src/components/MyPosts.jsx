/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import MyCarsCard from "./MyCarsCard";
import * as authService from '../services/authService';
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
export default function MyPosts() {
    let { _id} = useContext(AuthContext)
    let [myCars, setMyCars] = useState([]);
    let [error, setError] = useState(null);
    useEffect(() => {
        authService.getMyCars(_id)
            .then(result => {
                setMyCars(result.posts);
                console.log('Fetched posts:', result);  
            })
            .catch(error => {
                setError(error);
                console.error('Error fetching my cars:', error);
            });
    }, [_id]);

    if (error) {
        return <p>Error fetching posts: {error.message}</p>;
    }
 
   

    return (
        <>
            <ul className="car-list">
                {myCars.map(car => (
                    <MyCarsCard
                        key={car._id}
                        _id={car._id}
                        model={car.model}
                        img={car.img}
                        description={car.description} />
                ))}
                {myCars.length === 0 && (<h3>No posts</h3>)}
            </ul>
        </>
    )
}