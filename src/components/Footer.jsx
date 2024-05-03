import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container flex-column d-flex align-items-center py-3">
        <a
          className="footernav"
          target="_blank"
          href="https://github.com/MelissaCade"
        >
          GitHub Profile
        </a>
        <a className="footernav" target="_blank" href="#">
          LinkedIn Profile
        </a>
        <a className="footernav" target="_blank" href="#">
          Stack Overflow Profile
        </a>
      </div>
    </footer>
  );
}
