import { NavLink } from 'react-router-dom';
import './NavBar.css'
function NavBar() {

    const activeNavLink = (navLinkStatus) => {
        return navLinkStatus.isActive ? 'active' : ''
    }

    return (
        <div>
            <h2>Welome to my website</h2>
            <ul>
                <li><NavLink className={activeNavLink} to='/home'>Home</NavLink></li>
                <li><NavLink className={activeNavLink} to='/product'>Product</NavLink></li>
                <li><NavLink className={activeNavLink} to='/about-us'>About us</NavLink></li>
            </ul>
        </div>
    )
}

export default NavBar
