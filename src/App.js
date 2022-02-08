
import CharacterCard from "./components/CharacterCard/CharacterCard";
import { Navigate, Route, Routes, Link } from "react-router-dom";
import Filter from "./components/Filter/Filter";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import EditPage from "./pages/EditPage/EditPage";
import HomePage from "./pages/HomePage/HomePage";
import CreatePage from "./pages/CreatePage/CreatePage";
import CharacterPage from "./pages/CharacterPage/CharacterPage";
import NotFound from "./pages/NotFound/NotFound";
import Button from "./components/Button/Button";

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
          <Route path="/home" element={<HomePage />} />
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
        <div className="align-items-center">
          <ul className="row">
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
          </ul>
        </div>
      </section>
      <Button />
    </>
  );
}

export default App;
