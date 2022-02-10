import CharacterCardStyled from "../../styles/CharacterCard.styled";

const CharacterDetailCard = ({ character, actionAddFav }) => {
  return (
    <>
      <CharacterCardStyled>
        <li className="card">
          <div className="cardContainer">
            <img
              src={character.image}
              className="card-img-top"
              alt="alternative"
            />
            <div className="card-body">
              <h3 className="card-text">{character.name}</h3>
              <p className="card-text">
                {`${character.species} - ${character.gender}`}
              </p>
              <p className="card-text">{character.status}</p>
              <p className="card-text">Origin:</p>
              <p className="card-text">{character.origin.name}</p>
              <p className="card-text">Last known location:</p>
              <p className="card-text">{character.location.name}</p>
            </div>
          </div>
        </li>
      </CharacterCardStyled>
    </>
  );
};

export default CharacterDetailCard;
