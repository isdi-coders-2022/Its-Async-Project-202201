import CharacterCard from "../../components/CharacterCard/CharacterCard";
import CardListStyled from "../../styles/CardList.styled";
import Button from "../../components/Button/Button";
import { useContext, useEffect } from "react";
import CharacterContext from "../../store/contexts/CharacterContext";
import useCharacters from "../../hooks/useCharacters";

const HomePage = () => {
  const { loadCharactersAPI } = useCharacters();

  const { characters } = useContext(CharacterContext);

  useEffect(() => {
    loadCharactersAPI();
  }, [loadCharactersAPI]);

  return (
    <>
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
        <section className="container pagination justify-content-end">
          <div className="d-flex mb-3 me-3">
            <Button />
            <Button />
          </div>
        </section>
      </CardListStyled>
    </>
  );
};

export default HomePage;
