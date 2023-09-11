import { Link } from "react-router-dom";
import "../css/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary rayan-navBar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                categories
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                DESTINATION
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                OFFERS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                HELP
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/about"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About Us
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/about">
                    The Company
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    The Team
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Photo Gallery
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <button className=" btn-link mx-2">
              <i className="far fa-circle-user"></i> {/* User profile icon */}
            </button>

            <button className=" btn-primary mx-2">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
