import { Link, useLocation } from "react-router-dom";
import CharacterCardStyled from "../../styles/CharacterCard.styled";
import FavIcon from "../Icon/FavIcon";
import BinIcon from "../Icon/BinIcon";

const CharacterCard = ({ character, actionAddFav, deleteCharacter, page }) => {
  const location = useLocation();
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
                <Link to={`/character/${character.id}`}>More Info</Link>

                {location.pathname === "/character/" && (
                  <i
                    className="favIcon star"
                    onClick={() => {
                      actionAddFav(character);
                    }}
                  >
                    <FavIcon className="favIcon"></FavIcon>
                  </i>
                )}

                {location.pathname === "/favorites" && (
                  <i
                    className="favIcon bin"
                    onClick={() => deleteCharacter(character.id)}
                  >
                    <BinIcon className="favIcon"></BinIcon>
                  </i>
                )}
              </div>
            </div>
          </div>
        </li>
      </CharacterCardStyled>
    </>
  );
};

export default CharacterCard;
