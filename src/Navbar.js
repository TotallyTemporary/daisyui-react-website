import { Link } from 'react-router-dom'
import './Navbar.css'

let Navbar = () => {
    return <nav>
        <Link className="nav-link" to="/">Home</Link>
    </nav>
};

export default Navbar;