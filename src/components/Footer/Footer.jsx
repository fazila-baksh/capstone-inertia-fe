import { NavLink } from "react-router";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <NavLink className="footer__logo">inertia</NavLink>
      <p className="footer__copyrite">© inertia Inc. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
