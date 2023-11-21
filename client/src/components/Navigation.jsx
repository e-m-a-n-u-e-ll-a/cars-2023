import './Navigation.css'
import {Link} from 'react-router-dom'
export default function Navigation() {
   return(

    <nav>
    <ul className="nav-list">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/data/catalog">Catalog</Link></li>
      <li><Link to="/data/create">Upload a car</Link></li>
      <li><Link to="/users/login">Login</Link></li>
      <li><Link to="#">Register</Link></li>
    </ul>
  </nav>

  
   ) 
}
