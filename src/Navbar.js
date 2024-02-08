import {Link} from 'react-router-dom';
import Home from './graphics/home.png';
import Person from './graphics/profile.png';
import Logo from './graphics/logo.png';

// Create a simple navbar component that will have the logo of the website and two links to direct the page to home and the about page

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <Link to="/"><img className="mainLogo" src={Logo} alt="My logo" /></Link>
            <div className="links">
                <Link to="/"><img className="icon" src={Home} alt="My icon" />Home</Link>
                <Link to="/about"><img className="icon" src={Person} alt="My icon" style={{paddingRight: "23px"}}/>About Us</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;