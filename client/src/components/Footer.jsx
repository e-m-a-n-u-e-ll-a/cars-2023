import {Link} from 'react-router-dom';
import './Footer.css'

export default function Footer() {
return (

  <footer>
    <p>&copy; 2023 Car Website</p>
    <div className="footer-links">
   
      <Link to="/about">About Us</Link>
      
    </div>
  </footer>


)
}