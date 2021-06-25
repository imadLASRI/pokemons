import { Link } from 'react-router-dom'
import './Navbar.css'

export default function NavBar() {
    return(
        <div className="Navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/types">Types</Link></li>
            </ul>
        </div>
    )
}