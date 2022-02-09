import { useContext, useEffect } from "react";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import Filter from "../../components/Filter/Filter";
import useCharacters from "../../hooks/useCharacters";
import CharacterContext from "../../store/contexts/CharacterContext";
import CardListStyled from "../../styles/CardList.styled";

const FavoritesPage = () => {
  const { characters } = useContext(CharacterContext);
  const { loadCharactersLocalAPI } = useCharacters();

  useEffect(() => {
    loadCharactersLocalAPI();
  }, [loadCharactersLocalAPI]);

  return (
    <>
      <Filter text={"MY CHARACTERS"}></Filter>
      <CardListStyled>
        <section className="container">
          <div className="characterList">
            <ul>
              {characters.map((character) => (
                <CharacterCard character={character} key={character.id} />
              ))}
            </ul>
          </div>
        </section>
      </CardListStyled>
    </>
  );
};

export default FavoritesPage;
