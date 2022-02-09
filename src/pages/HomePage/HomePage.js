import CharacterCard from "../../components/CharacterCard/CharacterCard";
import CardListStyled from "../../styles/CardList.styled";
import Button from "../../components/Button/Button";

const HomePage = () => {
  const character1 = {
    name: "Morty",
    gender: "Male",
    species: "Human",
    status: "Alive",
    url: "https://images-na.ssl-images-amazon.com/images/I/91MteSqsrJL.jpg",
  };

  return (
    <>
      <CardListStyled>
        <section className="container">
          <div className="characterList">
            <ul>
              <CharacterCard character={character1} />
              <CharacterCard character={character1} />
              <CharacterCard character={character1} />
              <CharacterCard character={character1} />
              <CharacterCard character={character1} />
              <CharacterCard character={character1} />
              <CharacterCard character={character1} />
              <CharacterCard character={character1} />
              <CharacterCard character={character1} />
              <CharacterCard character={character1} />
              <CharacterCard character={character1} />
              <CharacterCard character={character1} />
              <CharacterCard character={character1} />
              <CharacterCard character={character1} />
              <CharacterCard character={character1} />
              <CharacterCard character={character1} />
              <CharacterCard character={character1} />
              <CharacterCard character={character1} />
              <CharacterCard character={character1} />
              <CharacterCard character={character1} />
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
