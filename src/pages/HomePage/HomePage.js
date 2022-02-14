import CharacterCard from "../../components/CharacterCard/CharacterCard";
import CardListStyled from "../../styles/CardList.styled";
import Button from "../../components/Button/Button";
import { useContext, useEffect } from "react";
import CharacterContext from "../../store/contexts/CharacterContext";
import useCharacters from "../../hooks/useCharacters";
import Filter from "../../components/Filter/Filter";

const HomePage = () => {
  const {
    loadCharactersAPI,
    loadFilteredHumansAPI,
    loadFilteredAliensAPI,
    loadFilteredAliveAPI,
    addCharactersFavAPI,
  } = useCharacters();

  const { characters, setPageNumber, pageNumber } =
    useContext(CharacterContext);

  const filterHumans = (characters) => {
    loadCharactersAPI(pageNumber);
    loadFilteredHumansAPI(characters);
  };

  const filterAliens = (characters) => {
    loadCharactersAPI(pageNumber);
    loadFilteredAliensAPI(characters);
  };

  const filterAlive = (characters) => {
    loadCharactersAPI(pageNumber);
    loadFilteredAliveAPI(characters);
  };

  const addCharacterFav = (character) => {
    addCharactersFavAPI(character);
  };

  const nextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const previousPage = () => {
    setPageNumber(pageNumber - 1);
  };

  useEffect(() => {
    loadCharactersAPI(pageNumber);
  }, [loadCharactersAPI, pageNumber]);
  return (
    <>
      <Filter
        text={"ALL CHARACTERS"}
        actionFilterHumans={filterHumans}
        actionFilterAliens={filterAliens}
        actionFilterAlive={filterAlive}
      ></Filter>
      <CardListStyled>
        <section className="container">
          <div className="characterList">
            <ul>
              {characters.map((character) => (
                <CharacterCard
                  character={character}
                  actionAddFav={addCharacterFav}
                  key={character.id}
                />
              ))}
            </ul>
          </div>
        </section>
        <section className="container pagination justify-content-end">
          <div className="d-flex mb-3 me-3">
            <Button actionOnClick={previousPage} text={"Previous"} />
            <Button actionOnClick={nextPage} text={"Next"} />
          </div>
        </section>
      </CardListStyled>
    </>
  );
};

export default HomePage;
