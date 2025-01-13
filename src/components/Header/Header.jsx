import "./Header.scss";
import menu from "../../assets/icons/menu.svg";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">inertia</h1>
      <img className="header__icon" src={menu} />
    </header>
  );
}

export default Header;
