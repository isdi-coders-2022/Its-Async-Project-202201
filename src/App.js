import { Navigate, Route, Routes, Link } from "react-router-dom";
import Filter from "./components/Filter/Filter";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import EditPage from "./pages/EditPage/EditPage";
import CreatePage from "./pages/CreatePage/CreatePage";
import CharacterPage from "./pages/CharacterPage/CharacterPage";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="/home">
              Rick & Morty App
            </a>
            <div className="d-lg-inline-flex" id="navbarNav">
              <ul className="navbar-nav d-flex flex-row-reverse">
                <li className="nav-item ms-2 me-2">
                  <Link to="/favorites">Favorites</Link>
                </li>
                <li className="nav-item ms-2 me-2">
                  <Link to="/create">Create</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/edit/:id" element={<EditPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/character/:id" element={<CharacterPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Filter></Filter>
      </header>

      <section className="container">
        <h2>CardList</h2>
        <div className="row align-items-center">
          <ul className="col">
            <li className="d-flex justify-content-center mb-3">
              <div className="card d-flex" style={{ width: "18rem" }}>
                <img
                  src="https://rickandmortyapi.com/api/character/avatar/36.jpeg"
                  className="card-img-top"
                  alt="alternative"
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </li>
            <li className="d-flex justify-content-center mb-3">
              {" "}
              <div className="card d-flex" style={{ width: "18rem" }}>
                <img
                  src="https://rickandmortyapi.com/api/character/avatar/36.jpeg"
                  className="card-img-top"
                  alt="alternative"
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </li>
            <li className="d-flex justify-content-center mb-3">
              {" "}
              <div className="card d-flex" style={{ width: "18rem" }}>
                <img
                  src="https://rickandmortyapi.com/api/character/avatar/36.jpeg"
                  className="card-img-top"
                  alt="alternative"
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <ul className="col">
            <li className="d-flex justify-content-center mb-3">
              {" "}
              <div className="card d-flex" style={{ width: "18rem" }}>
                <img
                  src="https://rickandmortyapi.com/api/character/avatar/36.jpeg"
                  className="card-img-top"
                  alt="alternative"
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </li>
            <li className="d-flex justify-content-center mb-3">
              {" "}
              <div className="card d-flex" style={{ width: "18rem" }}>
                <img
                  src="https://rickandmortyapi.com/api/character/avatar/36.jpeg"
                  className="card-img-top"
                  alt="alternative"
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </li>
            <li className="d-flex justify-content-center mb-3">
              {" "}
              <div className="card d-flex" style={{ width: "18rem" }}>
                <img
                  src="https://rickandmortyapi.com/api/character/avatar/36.jpeg"
                  className="card-img-top"
                  alt="alternative"
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </li>
          </ul>

          <ul className="col">
            <li className="d-flex justify-content-center mb-3">
              {" "}
              <div className="card d-flex" style={{ width: "18rem" }}>
                <img
                  src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
                  className="card-img-top"
                  alt="alternative"
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </li>
            <li className="d-flex justify-content-center mb-3">
              {" "}
              <div className="card d-flex" style={{ width: "18rem" }}>
                <img
                  src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
                  className="card-img-top"
                  alt="alternative"
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </li>
            <li className="d-flex justify-content-center mb-3">
              {" "}
              <div className="card d-flex" style={{ width: "18rem" }}>
                <img
                  src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
                  className="card-img-top"
                  alt="alternative"
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;
