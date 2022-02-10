import CharacterDetailCard from "../../components/CharacterDetailCard/CharacterDetailCard";
import Filter from "../../components/Filter/Filter";
import CardListStyled from "../../styles/CardList.styled";

const CharacterPage = () => {
  const character = [
    {
      name: "Maximus Rickimus",
      status: "Dead",
      species: "Human",
      gender: "Male",
      origin: "Earth 147",
      FirstSeen: "Citadel of Ricks",
      LastLocation: "Total Rickall",
      image: "https://rickandmortyapi.com/api/character/avatar/215.jpeg",
      id: "3144523",
    },
  ];

  return (
    <>
      <Filter text={"CHARACTER DETAILS"}></Filter>
      <CardListStyled>
        <section className="container">
          <div className="characterList">
            <ul>
              {character.map((character) => (
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
