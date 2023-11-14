/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react'
import CarCard from './CarCard'

export default function Catalog() {
  let [cars, setCars] = useState([]);
  useEffect(() => {
    console.log('Fetching data...');
    fetch('/data/catalog')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Data:', data);
        setCars(data);
      })
      .catch(error => {
        console.error('Error:', error);
        // You can add additional logging or error handling here
      })
      .finally(() => console.log('Data fetching complete.'));
  }, []);
  return (
    <section>
      {cars.map(car => (
        <CarCard
          key={car._id}
          model={car.model}
          img={car.img}
          description={car.description} />
      ))}
    </section>
  );
}