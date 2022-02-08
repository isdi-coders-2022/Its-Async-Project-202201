import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/home">
            Rick & Morty App
          </a>
          <div className="d-lg-inline-flex" id="navbarNav">
            <ul className="navbar-nav d-flex flex-row-reverse">
              <li className="nav-item ms-2 me-2">
                <Link to="/favorites" className="nav-item-link">
                  Favorites
                </Link>
              </li>
              <li className="nav-item ms-2 me-2">
                <Link to="/create" className="nav-item-link">
                  Create
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
