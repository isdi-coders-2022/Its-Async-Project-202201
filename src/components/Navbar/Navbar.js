import { Link } from "react-router-dom";
import NavBarStyled from "../../styles/navBar.styled";

const Navbar = () => {
  return (
    <>
      <NavBarStyled>
        <nav>
          <div className="navBar">
            <div className="navHome">
              <img
                className="icon"
                src="https://itsasync.netlify.app/images/rick.png"
                alt=""
                width="40px"
              />
              <a className="navbar-brand" href="/home">
                Rick & Morty App
              </a>
            </div>
            <div className="" id="navPage">
              <ul className="links">
                <li>
                  <Link to="/favorites">Favorites</Link>
                </li>
                <li>
                  <Link to="/create">Create</Link>
                </li>
              </ul>
            </div>
          </div>
          <section className="navImg">
            <img
              src="https://itsasync.netlify.app/images/title.png"
              alt="Rick and Morty"
            />
          </section>
        </nav>
      </NavBarStyled>
    </>
  );
};

export default Navbar;
