import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        backgroundImage:
          "linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)"
      }}
    >
      <div className="container">
        <Link className="navbrand fw-bold d-flex align-items-center" to="/">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2819/2819194.png"
            alt="logo img"
            className="me-2"
          />
          <span>F</span>oodies
        </Link>
        <button
          className="navbar-toggler navbar-toggler-btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon navbar-toggler-btn-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                About
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#dashboard"
                tabindex="-1"
                aria-disabled="true"
              >
                Dashboard
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button
              type="submit"
              className="btn btn-dark nav-login-btn"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Login
            </button>
            <button
              type="submit"
              className="btn btn-dark mx-3 nav-login-btn"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
export default Header;
