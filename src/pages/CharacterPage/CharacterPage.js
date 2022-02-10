import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import CharacterDetailCard from "../../components/CharacterDetailCard/CharacterDetailCard";
import Filter from "../../components/Filter/Filter";
import useCharacters from "../../hooks/useCharacters";
import CharacterContext from "../../store/contexts/CharacterContext";
import CardListStyled from "../../styles/CardList.styled";
import CharacterCardStyled from "../../styles/CharacterCard.styled";

const CharacterPage = () => {
  const { characters } = useContext(CharacterContext);
  let { id } = useParams();
  const { loadCharacterDetailsAPI } = useCharacters();

  useEffect(() => {
    loadCharacterDetailsAPI(id);
  }, [id, loadCharacterDetailsAPI]);

  return (
    <>
      <Filter text={"CHARACTER DETAILS"}></Filter>
      <CardListStyled>
        <section className="container">
          <div className="characterList">
            <ul>
              {characters.map((character) => (
                <CharacterDetailCard character={character} key={character.id} />
              ))}
            </ul>
          </div>
        </section>
        <section className="container pagination justify-content-end"></section>
      </CardListStyled>
    </>
  );
};

export default CharacterPage;
