import CharacterCardStyled from "../../styles/CharacterCard.styled";
import FavIcon from "../Icon/FavIcon";

const CharacterCard = ({ character, actionAddFav }) => {
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
              <a href="..........."> + Info </a>
              <button
                className="favIcon"
                onClick={() => {
                  actionAddFav(character);
                }}
              >
                <FavIcon className="favIcon"></FavIcon>
              </button>
            </div>
          </div>
        </li>
      </CharacterCardStyled>
    </>
  );
};

export default CharacterCard;
