/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import CarCard from './CarCard'
import * as carService from '../services/carService';
import './Catalog.css'

export default function Catalog() {
  let [cars, setCars] = useState([]);
  useEffect(() => {
    carService.getAll()
      .then(result => setCars(result))
  }, []);


  return (
    <ul className="car-list">
      {cars.map(car => (
        <CarCard
          key={car._id}
          _id={car._id}
          model={car.model}
          img={car.img}
          description={car.description} />
      ))}
      {cars.length === 0 && (<h3>No posts</h3>)}
    </ul>
  );
}