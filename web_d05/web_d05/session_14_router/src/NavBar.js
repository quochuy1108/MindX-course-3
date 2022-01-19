import { NavLink } from "react-router-dom";
import "./NavBar.css";

const activeNavLinkClassName = (navLinkStatus) => {
  return navLinkStatus.isActive ? "active" : "";
};

const NavBar = () => {
  return (
    <div>
      <h2>Welcome to my website</h2>
      <ul>
        <li>
          <NavLink className={activeNavLinkClassName} to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={activeNavLinkClassName} to="/products">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink className={activeNavLinkClassName} to="/about-us">
            About us
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
