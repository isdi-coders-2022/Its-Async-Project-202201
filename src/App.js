import CharacterCard from "./components/CharacterCard/CharacterCard";
import { Navigate, Route, Routes } from "react-router-dom";
import Filter from "./components/Filter/Filter";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import EditPage from "./pages/EditPage/EditPage";
import HomePage from "./pages/HomePage/HomePage";
import CreatePage from "./pages/CreatePage/CreatePage";
import CharacterPage from "./pages/CharacterPage/CharacterPage";
import NotFound from "./pages/NotFound/NotFound";
import Button from "./components/Button/Button";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbar />
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
        <main className="align-items-center">
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
        </main>
        <div className="d-md-flex justify-content-md-end mb-4">
          <Button />
          <Button />
        </div>
      </section>
    </>
  );
}

export default App;
