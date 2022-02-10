import CharacterCardStyled from "../../styles/CharacterCard.styled";
import FavIcon from "../Icon/FavIcon";

const CharacterDetailCard = ({ character }) => {
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
              <p className="card-text">{character.name}</p>
              <p className="card-text">
                {`${character.species} - ${character.gender}`}
              </p>
              <p className="card-text">{character.status}</p>
              <p className="card-text">Origin:</p>
              <p className="card-text">{character.origin}</p>
              <p className="card-text">First seen in:</p>
              <p className="card-text">{character.FirstSeen}</p>
              <p className="card-text">Last known location:</p>
              <p className="card-text">{character.LastLocation}</p>
              <FavIcon className="favIcon"></FavIcon>
            </div>
          </div>
        </li>
      </CharacterCardStyled>
    </>
  );
};

export default CharacterDetailCard;
