import { CartWidget } from '../CartWidget/CartWidget'
import { Link } from "react-router-dom"
import './NavBar.scss'

export const NavBar = () => {
    return ( 
            <header className="navBar">
                <h1><Link to="/">E-commerce react js</Link></h1>
                <nav>
                    <ul>
                        <li><Link to="/productos/televisores">Televisores</Link></li>
                        <li><Link to="/productos/notebooks">Notebooks</Link></li>
                        <li><Link to="/productos/celulares">Celulares</Link></li>
                        <Link to='/cart'><CartWidget /></Link>
                    </ul>
                 </nav>
            </header>
            )
}

// export default NavBar;