import { Link } from "react-router";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <Link to="/" className="footer__logo">
        inertia
      </Link>
      <p className="footer__copyrite">© inertia Inc. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
