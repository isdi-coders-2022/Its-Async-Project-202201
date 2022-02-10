import CharacterCardStyled from "../../styles/CharacterCard.styled";
import FavIcon from "../Icon/FavIcon";
import BinIcon from "../Icon/BinIcon";

const CharacterCard = ({ character, deleteCharacter }) => {
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
              <div className="linksContainer">
                <a href="..........."> + Info </a>
                <FavIcon className="favIcon"></FavIcon>
                <button
                  className="favIcon"
                  onClick={() => deleteCharacter(character.id)}
                >
                  <BinIcon className="favIcon"></BinIcon>
                </button>
              </div>
            </div>
          </div>
        </li>
      </CharacterCardStyled>
    </>
  );
};

export default CharacterCard;
