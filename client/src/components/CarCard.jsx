/* eslint-disable react/prop-types */
import './CarCard.css'

export default function CarCard({ img, model, description }) {
  return (
    <div className="car">
      <img src={img} alt={`${model} Image`} />
      <h2>{model}</h2>
      <p>{description}</p>
    </div>
  );
}