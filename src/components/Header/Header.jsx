import "./Header.scss";
import { Link, NavLink } from "react-router";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__title">
        inertia
      </Link>
      <nav className="header__nav">
        <NavLink to="/" className="header__nav-link" activeclassname="active">
          daily
        </NavLink>
        <NavLink
          to="/weekly"
          className="header__nav-link"
          activeclassname="active"
        >
          weekly
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
