import "./Header.scss";
import { NavLink } from "react-router";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">inertia</h1>
      <nav className="header__nav">
        <NavLink to="/" className="header__nav-link">
          daily
        </NavLink>
        <NavLink to="/weekly" className="header__nav-link">
          weekly
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
