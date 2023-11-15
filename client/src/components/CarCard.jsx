/* eslint-disable react/prop-types */
import './CarCard.css'

export default function CarCard({ img, model, description }) {
  return (
  
      <li className="car">
        <img src={img} alt="Car 1" />
          <h2>{model}</h2>
          <p>{description}</p>
          <button>Details</button>
      </li>

  
  );
}