/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
import './CarCard.css';
import {Link} from 'react-router-dom'

export default function CarCard({ _id , img, model, description}) {
  return (

    <li className="car">
      <img src={img} alt="Car 1" />
      <h2>{model}</h2>
      <p>{description}</p>
     <button> <Link to={`/data/catalog/${_id}`}>Details</Link> </button>
    </li>


  );
}