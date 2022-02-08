import CharacterCard from "./components/CharacterCard/CharacterCard";
import { Navigate, Route, Routes } from "react-router-dom";
import Filter from "./components/Filter/Filter";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import EditPage from "./pages/EditPage/EditPage";
import HomePage from "./pages/HomePage/HomePage";
import CreatePage from "./pages/CreatePage/CreatePage";
import CharacterPage from "./pages/CharacterPage/CharacterPage";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import CardListStyled from "./styles/CardList.styled";
import Navbar from "./components/Navbar/Navbar";
import Button from "./components/Button/Button";
import useCharacters from "./hooks/useCharacters";
import { useEffect } from "react";

function App() {
  const { loadCharactersAPI } = useCharacters();

  useEffect(() => {
    loadCharactersAPI();
  }, [loadCharactersAPI]);

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

      <CardListStyled>
        <section className="container">
          <div className="characterList">
            <ul>
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
        <section className="container pagination justify-content-end">
          <div className="d-flex mb-3 me-3">
            <Button />
            <Button />
          </div>
        </section>
      </CardListStyled>
      <Footer />
    </>
  );
}

export default App;
